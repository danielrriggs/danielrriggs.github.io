CAP Theorem - Consistency, Availability, Partition Tolerant (resilience) - Choose 2.

- **Consistency** means that every read to a database will receive the most recent write or it will get an error.
- **Availability** means that every request will receive a non-error response, but without the guarantee that it contains the most recent write (and that's important).
- **Partition tolerance** means that the system can be made of multiple network partitions, and the system continues to operate even if there are a number of dropped messages, or errors between these network nodes.

The CAP theorem states that any database product is only capable of delivering a maximum of two of these different factors.

Imagine that you have a database with many different nodes, all of these are on a network, imagine if communication fails between some of the nodes, or if any of the nodes fail. Well you have two choices if somebody reads from that database. You can cancel the operation, and thus decrease the availability, but ensure the consistency, or you can proceed with the operation and improve the availability, but risk the consistency. It's widely regarded as impossible to deliver a database platform which provides more than two of these three different elements. If you have a database system which has multiple nodes, and if a network is involved, then you generally have a choice to provide either consistency or availability. The transaction models of ACID and BASE choose different trade-offs.
