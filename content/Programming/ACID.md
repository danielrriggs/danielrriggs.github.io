Means transactions are
- Atomic
	- Means that **all** parts of the transaction are successful, or **none** of the parts of the transaction are successful.
- Consistent
	- Means transactions move the database from **one valid state** to **another** - nothing in between is allowed.
		- As per the rules of that database - For example, there could be corresponding items on other tables (FKs), values might need to be in certain ranges.
- Isolated
	- If multiple transactions occur at once, they **don't interfere with each other**. Each executes as if it's **the only one**.
- Durable
	- Once **committed**, transactions are **durable**. Stored on non-volatile memory, resilient to power outages or crashes.