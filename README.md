### Outside-In TDD with system/acceptance tests

## Acceptance Criteria

- Client deposits an amount of 1000 on 2020-05-20
- Client deposits another amount of 2000 on 2020-05-21
- Client withdraws an amount of 500 on 2020-05-22
- When printing a bank statement we should see the following output

```text
DATE       || AMOUNT || BALANCE
22/05/2020 || -500   || 2500
21/05/2020 || 2000   || 3000
20/05/2020 || 1000   || 1000
```

