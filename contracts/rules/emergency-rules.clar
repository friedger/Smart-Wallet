(use-trait extension-trait .extension-trait.extension-trait)

(define-public (is-allowed-stx (amount uint) (recipient principal) (memo (optional (buff 34))))
    (ok false))

(define-public (is-allowed-extension (extension <extension-trait>) (payload (buff 2048)))
    (ok false))