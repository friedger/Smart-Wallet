(define-constant amount u1000000)

(define-public (test-delegate-and-lock-flow)
  (begin
    (try! (delegate))
    ;; @caller wallet_2
    (try! (lock))
    (ok true)
  )
)

(define-public (delegate)
  (begin
    (try! (stx-transfer? amount tx-sender .smart-wallet-standard))
    (try! (contract-call? .smart-wallet-endpoint delegate-stx .smart-wallet-standard
      .ext-delegate-stx-pox-4 amount
      'ST2CY5V39NHDPWSXMW9QDT3HC3GD6Q6XX4CFRK9AG
    ))
    (ok true)
  )
)

(define-public (lock)
  (let ((result (contract-call? 'ST000000000000000000002AMW42H.pox-4 delegate-stack-stx
      .ext-delegate-stx-pox-4 amount {
      version: 0x01,
      hashbytes: 0xb0b75f408a29c271d107e05d614d0ff439813d02,
    }
      u100 u1
    )))
    (asserts! (is-ok result) (err-to-uint result))
    (asserts!
      (is-eq result
        (ok {
          lock-amount: amount,
          stacker: .ext-delegate-stx-pox-4,
          unlock-burn-height: u2100,
        })
      )
      (err u999)
    )
    (ok true)
  )
)

(define-private (err-to-uint (resp (response {
  lock-amount: uint,
  stacker: principal,
  unlock-burn-height: uint,
}
  int
)))
  (match resp
    o (ok true)
    e (err (to-uint e))
  )
)
