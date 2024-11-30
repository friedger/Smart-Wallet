(define-public (delegate-stx (amount-ustx uint)
                             (delegate-to principal)
                             (until-burn-ht (optional uint))
                             (pox-addr (optional { version: (buff 1), hashbytes: (buff 32) })))

    (begin
      ;; must be called directly by the tx-sender or by an allowed contract-caller
      (asserts! (check-caller-allowed)
                (err ERR_STACKING_PERMISSION_DENIED))

      ;; delegate-stx no longer requires the delegator to not currently
      ;; be stacking.
      ;; delegate-stack-* functions assert that
      ;; 1. users can't swim in two pools at the same time.
      ;; 2. users can't switch pools without cool down cycle.
      ;;    Other pool admins can't increase or extend.
      ;; 3. users can't join a pool while already directly stacking.

      ;; pox-addr, if given, must be valid
      (match pox-addr
         address
            (asserts! (check-pox-addr-version (get version address))
                (err ERR_STACKING_INVALID_POX_ADDRESS))
         true)

      ;; tx-sender must not be delegating
      (asserts! (is-none (get-check-delegation tx-sender))
        (err ERR_STACKING_ALREADY_DELEGATED))

      ;; add delegation record
      (map-set delegation-state
        { stacker: tx-sender }
        { amount-ustx: amount-ustx,
          delegated-to: delegate-to,
          until-burn-ht: until-burn-ht,
          pox-addr: pox-addr })

      (ok true)))