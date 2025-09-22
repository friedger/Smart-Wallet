(define-constant amount u1000)
(define-constant fees u1)
(define-constant bob 'ST2CY5V39NHDPWSXMW9QDT3HC3GD6Q6XX4CFRK9AG)

(define-public (test-transfer-sbtc)
  (begin
    (try! (contract-call? 'SM3VDXK3WZZSA84XXFKAFAF15NNZX32CTSG82JFQ4.sbtc-token
      transfer amount tx-sender .smart-wallet-standard none
    ))
    (try! (contract-call? .smart-wallet-endpoint sbtc-transfer-sponsored
      .smart-wallet-standard {
      amount: amount,
      to: bob,
      fees: fees,
    }))
    (ok true)
  )
)
