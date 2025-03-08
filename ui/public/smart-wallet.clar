;; title: smart-wallet-standard
;; version: 1
;; summary: Extendible smart wallet with standard SIP-010 and SIP-009 support
(use-trait extension-trait 'ST3FFRX7C911PZP5RHE148YDVDD9JWVS6FZRA60VS.extension-trait.extension-trait)

(use-trait sip-010-trait 'ST3FFRX7C911PZP5RHE148YDVDD9JWVS6FZRA60VS.sip-010-trait-ft-standard.sip-010-trait)
(use-trait sip-009-trait 'ST3FFRX7C911PZP5RHE148YDVDD9JWVS6FZRA60VS.nft-trait.nft-trait)

(define-constant err-unauthorised (err u4001))
(define-constant err-forbidden (err u4003))
(define-fungible-token ect )
(define-read-only (is-admin-calling)
	(ok (asserts! (default-to false (map-get? admins tx-sender)) err-unauthorised))
)

;;
;; calls with context switching
;;
(define-public (stx-transfer (amount uint) (recipient principal) (memo (optional (buff 34))))
	(begin
		(try! (is-admin-calling))
		(print {a: "stx-transfer", payload: {amount: amount, recipient: recipient, memo: memo}})
		(as-contract (match memo
			to-print (stx-transfer-memo? amount tx-sender recipient to-print)
			(stx-transfer? amount tx-sender recipient)
		))
	)
)

(define-public (extension-call (extension <extension-trait>) (payload (buff 2048)))
	(begin
		(try! (is-admin-calling))
		(try! (ft-mint? ect u1 (as-contract tx-sender)))
		(try! (ft-burn? ect u1 (as-contract tx-sender)))
		(print {a: "extension-call", payload: {extension: extension, payload: payload}})
		(as-contract (contract-call? extension call payload))
	)
)

;;
;; calls without context switching
;;

(define-public (sip010-transfer (amount uint) (recipient principal) (memo (optional (buff 34))) (sip010 <sip-010-trait>))
	(begin
		(try! (is-admin-calling))
		(print {a: "sip010-transfer", payload: {amount: amount, recipient: recipient, memo: memo, sip010: sip010}})
		(contract-call? sip010 transfer amount (as-contract tx-sender) recipient memo)
	)
)


(define-public (sip009-transfer (nft-id uint) (recipient principal) (sip009 <sip-009-trait>))
	(begin
		(try! (is-admin-calling))
		(print {a: "sip009-transfer", payload: {nft-id: nft-id, recipient: recipient, sip009: sip009}})
		(contract-call? sip009 transfer nft-id (as-contract tx-sender) recipient)
	)
)

;;
;; admin functions
;;
(define-map admins principal bool)

(define-public (enable-admin (admin principal) (enabled bool))
	(begin
		(try! (is-admin-calling))
		(asserts! (not (is-eq admin contract-caller)) err-forbidden)
		(print {a: "enable-admin", payload: {admin: admin, enabled: enabled}})
		(ok (map-set admins admin enabled))
	)
)

(define-public (transfer-wallet (new-admin principal))
	(begin
		(try! (is-admin-calling))
		(try! (enable-admin new-admin true))
		(map-delete admins contract-caller)
		(print {a: "transfer-wallet", payload: {new-admin: new-admin}})
		(ok true)
	)
)

;; init
(map-set admins tx-sender true)
(map-set admins (as-contract tx-sender) true)