An IAM Policy.
 A set of security statements to AWS. It grants access or denies access to AWS products and features to any identity, which users can access.
 Identity policies, also known as policy documents, are created using JSON.
 
The [[AWS/principal]] part of a policy, or more specifically the principle part of a statement in a policy, defines who that statement applies to, which identities, which principles. Now in an identity policy, this generally isn't there, because it's implied that the identity which the policy is applied to is the principle