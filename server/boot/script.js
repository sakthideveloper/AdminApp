
ACL.create( {principalType: ACL.USER, 
             principalId: 'u001', 
             model: 'User', 
             property: ACL.ALL,
             accessType: ACL.ALL, 
             permission: ACL.ALLOW}, 
             function (err, acl) { ACL.create( {principalType: ACL.USER, 
                                                principalId: 'u001', 
                                                model: 'User', 
                                                property: ACL.ALL,
                                                accessType: ACL.READ, 
                                                permission: ACL.DENY}, 
                                                function (err, acl) { }
                                                })
                                 }
             })