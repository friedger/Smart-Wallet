(define-constant err-invalid-payload (err u5000))

(define-public (stx-transfer-sponsored (details {amount: uint, to: principal, fees: uint}))
    (contract-call? .smart-wallet extension-call .sponsored-transfer (unwrap! (to-consensus-buff? details) err-invalid-payload)))


(define-public (stx-transfer (details {amount: uint, to: principal}))
    (let ((info (unwrap! (to-consensus-buff? details) err-invalid-payload)))
        (contract-call? .smart-wallet stx-transfer .no-rules (get amount info) (get to info))
    ))
