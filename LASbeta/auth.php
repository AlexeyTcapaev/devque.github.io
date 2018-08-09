<?php
$adServer = "ldap://10.78.4.105";

$ldap = ldap_connect($adServer);
$username =$_GET['AuthUser'];
$password =$_GET['AuthPass'];

$ldaprdn = 'guss' . "\\" . $username;

ldap_set_option($ldap, LDAP_OPT_PROTOCOL_VERSION, 3);
ldap_set_option($ldap, LDAP_OPT_REFERRALS, 0);

    $bind = @ldap_bind($ldap, $ldaprdn, $password); 
    $filter="(sAMAccountName=$username)";
    $result = ldap_search($ldap,"dc=guss,dc=ru",$filter);
    ldap_sort($ldap,$result,"sn");
    $info = ldap_get_entries($ldap, $result);
    if($info[0]['thumbnailphoto'][0]!='')
    {
        $_SESSION['photo'] = $info[0]['thumbnailphoto'][0];
    }
    $_SESSION['log_on']=$_SERVER['REMOTE_ADDR'];
    $_SESSION['position']=$info[0]["title"][0];
    $_SESSION['name']=$info[0]["sn"][0]." ".$info[0]["givenname"][0];
    $_SESSION['login_ad']=$info[0]["samaccountname"][0];
    $_SESSION['department_ad']=$info[0]["department"][0];
    $_SESSION['mail']=$info[0]["mail"][0];
    $_SESSION['last_logon']=date("Y-m-d H:i:s");
    $_SESSION['session_id']=session_id();
    @ldap_close($ldap);
    
    require('rb/rb.php');
    R::setup('mysql:host=10.78.5.234;dbname=las','las','laspass');
    R::freeze(true);
    
    $logon=$_SESSION['log_on'];
    $position=$_SESSION['position'];
    $name=$_SESSION['name'];
    $login_ad=$_SESSION['login_ad'];
    $department_ad=$_SESSION['department_ad'];
    $ll=R::dispense('userlogon');
       $ll->login_ad = $login_ad;
       $ll->session =  $_SESSION['session_id'];
       $ll->pcip = $_SERVER['REMOTE_ADDR'];
       $ll=R::store($ll);




   $check=R::findOrCreate('employees',array('name' => $info[0]["sn"][0]." ".$info[0]["givenname"][0]));
   $check->logon = $logon;
   $check->name = $name;
   $check->login_ad = $login_ad;
   $check->department_ad = $info[0]["department"][0];
   $check->phone = $info[0]['ipphone'][0];
   $check->position = $position;
   $check->last_logon = $_SESSION['last_logon'];
   if($_SESSION['photo']!='')
   $check->photo = 'photo/'.$_SESSION['login_ad'].'.jpg';
   $check->auth = 1;
   $check->session_id = $_SESSION['session_id'];
   if($check->role==1)
   {
       $user_mass=array();
       $userlist=R::findAll('employees');
       foreach($userlist as $user)
       {
           array_push($user_mass,$user->name);
       }
       $_SESSION['adm']=1;
       $_SESSION['user_mass']=$user_mass;
   }
   if($check->role==2)
   {
       $user_mass=array();
       $userlist=R::findAll('employees');
       foreach($userlist as $user)
       {
           array_push($user_mass,$user->name);
       }
       $_SESSION['adm']=2;
       $_SESSION['user_mass']=$user_mass;
   }
   $id=R::store($check);

   echo json_encode($check, JSON_FORCE_OBJECT);






?>