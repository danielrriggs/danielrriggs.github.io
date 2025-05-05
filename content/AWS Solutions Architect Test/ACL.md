**Access control lists**, or ACLs, are ways to apply security to objects or buckets. They're a sub-resource of that object or of that bucket. **ACLs are legacy and are not used as much anymore**. AWS doesn't recommend their use. They recommend bucket policies. Just be aware of their existence. Part of the reason that they aren't used all that often and that bucket policies have replaced much of what they do is that they're actually inflexible and only allow very simple permissions. They can't have conditions like bucket policies, and so you're restricted to some very broad conditions.

- ACLs on **objects** and **bucket**
- A Subresource
- Legacy
- Inflexible & Simple permissions

With ACLs, you either configure an ACL on the bucket or you configure an ACL on an object but you don't have the flexibility of being able to have a single ACL that affects a group of objects. That's one of the reasons that a bucket policy is significantly more flexible.
![[Access Control Lists (ACLs).png]]