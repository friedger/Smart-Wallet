(define-constant deployer 'ST1PQHQKV0RJXZFY1DGX8MNSNYVE3VGZJSRTPGZGM)
(define-constant alice 'ST1SJ3DTE5DN7X54YDH5D64R3BCB6A2AG2ZQ8YPD5)
(define-constant amount u1000)

(define-public (test-transfer-stx)
  (let ((alice-balance (stx-get-balance alice)))
    (try! (stx-transfer? amount tx-sender .smart-wallet-standard))
    (try! (contract-call? .smart-wallet-standard stx-transfer amount alice none))
    (asserts! (is-eq (stx-get-balance alice) (+ alice-balance amount))
      (err u1001)
    )
    (ok true)
  )
)

(define-public (test-extension-call)
  (begin
    (try! (contract-call? .smart-wallet-standard extension-call .ext-test
      (unwrap-panic (to-consensus-buff? .smart-wallet-standard))
    ))
    (ok true)
  )
)

(define-public (test-enable-admin)
  (begin
    (try! (contract-call? .smart-wallet-standard enable-admin deployer true))
    (try! (contract-call? .smart-wallet-standard is-admin-calling))
    (ok true)
  )
)
