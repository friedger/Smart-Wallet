
(use-trait extension-trait .extension-trait.extension-trait)
(use-trait sip-010-trait 'SP3FBR2AGK5H9QBDH3EEN6DF8EK8JY7RX8QJ5SVTE.sip-010-trait-ft-standard.sip-010-trait)
(use-trait sip-009-trait 'SP2PABAF9FTAJYNFZH93XENAJ8FVY99RRM50D2JG9.nft-trait.nft-trait)
(use-trait sip-013-trait 'SPDBEG5X8XD50SPM1JJH0E5CTXGDV5NJTKAKKR5V.sip013-semi-fungible-token-trait.sip013-semi-fungible-token-trait)

(define-trait rule-set-trait
    (
        (is-allowed-stx (principal uint principal (optional (buff 34))) (response bool uint))
        (is-allowed-extension (principal <extension-trait> (buff 2048)) (response bool uint))
        (is-allowed-sip010 (principal <sip-010-trait> uint principal (optional (buff 34))) (response bool uint))
        (is-allowed-sip009 (principal <sip-009-trait> uint principal) (response bool uint))
        (is-allowed-sip013 (principal <sip-013-trait> uint uint principal) (response bool uint))
    )
)