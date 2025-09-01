An operation can be applied multiple times without changing the result beyond the initial application.
In other words, an operation is idempotent if: it accidently gets run multiple times, it doesn't matter.

**REST**
GET,PUT,DELETE are idempotent
POST is not idempotent