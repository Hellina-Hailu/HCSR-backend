var UserData=require('../model/userModel.js');

module.exports.get_login_info=function(req,res,next){

UserData.get_login_info(req.body,function(err , authority){
//console.log(req.body.username);

//res.send(authority);

if(authority.isAuthorized)
{
var data={isAuthorized:authority.isAuthorized, token: authority.token};
//console.log(data.token);
res.status(200).send(data);

}
else{
	//console.log("here");
res.sendStatus(500);
}

});

};


module.exports.get_login_patient=function(req,res,next){
console.log(req.body.Username);
UserData.get_login_patient(req.body,function(err , authority){
//console.log(req.body.username);

res.status(200).send(authority);



});

};



module.exports.add_new_user=function(req, res){
var new_user= new UserData(req.body);
if(!new_user.Username||!new_user.Password){

	res.status(400).send({error: true, message:"Enter Username and Password"});
}
else{
UserData.add_new_user(new_user, function(err, user)
{
if(err)
res.send(err);
res.json(user);
});

}

};


module.exports.add_new_user_patient=function(req, res){
var new_user= new UserData(req.body);
if(!new_user.Username||!new_user.Password){

	res.status(400).send({error: true, message:"enter Username and password"});
}
else{
UserData.add_new_user_patient(new_user, function(err, user)
{
if(err)
res.send(err);
res.json(user);
});

}

};

module.exports.edit_employee_profile=function(req,res){
UserData.edit_employee_profile(new UserData(req.body), function(err,user){

res.json(user);
});

};
module.exports.edit_profile=function(req,res){

UserData.edit_profile(new UserData(req.body),req, function(err,user){
if(err)
 res.send(err);
res.json(user);
});

};


module.exports.get_profile=function(req, res,next){

	UserData.get_profile(req, function(err,user)
{

	if(err)
		res.send(err);
	console.log('res', user);
res.send(user);

});
}

module.exports.get_employee_record=function(req, res,next){
	UserData.get_employee_record(req, function(err,employee)
{

	if(err)
		res.send(err);
	console.log('res', employee);
res.send(employee);

});
}

module.exports.add_new_employee=function(req, res){
var new_employee= new UserData(req.body);
if(!new_employee.Firstname||!new_employee.Username){

	res.status(400).send({error: true, message:"Enter Firstname  or Username"});
}
else{
UserData.add_new_employee(new_employee,req, function(err, employee)
{
if(err)
res.send(err);
console.log("New employee added");
res.json(employee);
});

}

}

module.exports.add_moh_user=function(req, res){
	var new_employee= new UserData(req.body);
	if(!new_employee.Firstname||!new_employee.Username){
	
		res.status(400).send({error: true, message:"enter First Name  or Username"});
	}
	else{
	UserData.add_moh_user(new_employee,req, function(err, employee)
	{
	if(err)
	res.send(err);
	res.json(employee);
	});
	
	}
	
	}

module.exports.moh_add_pharmacy_admin=function(req, res){
	var new_employee= new UserData(req.body);
	if(!new_employee.Firstname||!new_employee.Username){
		
		res.status(400).send({error: true, message:"enter First Name  or Username"});
	}
	else{
	UserData.moh_add_pharmacy_admin(new_employee,req, function(err, employee)
	{
	if(err)
	res.send(err);
	res.json(employee);
	});
		
	}
		
	}
////////////////////////////////////////////////////////////////////////////////

module.exports.add_new_user_patient=function(req, res){
	var new_user= new UserData(req.body);
	if(!new_user.Username||!new_user.Password){
	
		res.status(400).send({error: true, message:"enter Username and password"});
	}
	else{
	UserData.add_new_user_patient(new_user, function(err, user)
	{
	if(err)
	res.send(err);
	res.json(user);
	});
	
	}
	
	};
	


module.exports.edit_patient_profile=function(req, res){
	
	UserData.edit_patient_profile(req.body, function(err, user)
		{
			if(err)
				res.send(err);
			res.json(user);
		});
	
	
	};

module.exports.get_login_patient=function(req,res,next){
var login_data= new UserData(req.body);
		console.log(login_data.Username);
		UserData.get_login_patient(login_data,function(err , authority){
console.log(authority.isAuthorized);
if(authority.isAuthorized)
{
var data={isAuthorized:authority.isAuthorized, userData: authority.userData};
//console.log(data.token);
res.status(200).send(data);

}
else{
res.sendStatus(500);
}

	});
};
		
