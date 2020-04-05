<?php

	$name 			= 	$_POST["name"];
    $email           =   $_POST["email"];
    $mobile     =   $_POST["mobile"];
    $gender  = $_POST["gender"];
    $nativePlace = $_POST["nativePlace"];
    $presentAddressWithPin = $_POST["presentAddressWithPin"];
    $educationalQualification = $_POST["educationalQualification"];
    $motherTongue = $_POST["motherTongue"];
    $motherTongueProf = $_POST["motherTongueProf"];
    $otherLanguagesKnown = $_POST["otherLanguagesKnown"];
    $presentOccupation = $_POST["presentOccupation"];
    $otherSkills = $_POST["otherSkills"];
    $digitalSkills = $_POST["digitalSkills"];
    $priorTheatreExperience = $_POST["priorTheatreExperience"];
    $professionalSkills = $_POST["professionalSkills"];
    $bhoomikaSource = $_POST["bhoomikaSource"];
    $futurePlans = $_POST["futurePlans"];
    $appBefore = $_POST["appBefore"];
    $backstageConsent = $_POST["backstageConsent"];
    $rulesConsent = $_POST["rulesConsent"];
    $imgAttached = $_POST["imgAttached"];
	
	$to 			= 	"drithn@gmail.com";
	$subject 		= 	"Potential Info of Student For Acting Workshop";
	$message 		= 	"<html>


<head></head>
<body style='background-color:#f0f0f0; padding:40px 0;'>
<table align='center' cellpadding='10' bgcolor='#FFFFFF' cellspacing='0' border='0' bordercolor='#ccc' style='width:100%; max-width:600px; font-family:Arial, Helvetica, sans-serif; font-size:13px; border:3px solid #e2e2e2;'>
	<tr>
    	<td colspan='2' align='center' style='font-size:25px; font-family:'Trebuchet MS', Arial, Helvetica, sans-serif;'><h2> Contact Enquiry from Bhoomika Website<h2></td>
    </tr>
    <tr>
    	<td width='180' valign='top' style='border-right:1px solid #e2e2e2;border-bottom:1px solid #e2e2e2; border-top:1px solid #e2e2e2;'>Name</td>
        <td valign='top' style='border-bottom:1px solid #e2e2e2;border-top:1px solid #e2e2e2;'> ".$name." </td>
    </tr>
    <tr>
        <td width='180' valign='top' style='border-right:1px solid #e2e2e2;border-bottom:1px solid #e2e2e2; border-top:1px solid #e2e2e2;'>E-Mail</td>
        <td valign='top' style='border-bottom:1px solid #e2e2e2;border-top:1px solid #e2e2e2;'> ".$email." </td>
    </tr>
    <tr>
        <td width='180' valign='top' style='border-right:1px solid #e2e2e2;border-bottom:1px solid #e2e2e2; border-top:1px solid #e2e2e2;'>Mobile</td>
        <td valign='top' style='border-bottom:1px solid #e2e2e2;border-top:1px solid #e2e2e2;'> ".$gender." </td>
    </tr>
    <tr>
        <td width='180' valign='top' style='border-right:1px solid #e2e2e2;border-bottom:1px solid #e2e2e2; border-top:1px solid #e2e2e2;'>Mobile</td>
        <td valign='top' style='border-bottom:1px solid #e2e2e2;border-top:1px solid #e2e2e2;'> ".$nativePlace." </td>
    </tr>
    <tr>
        <td width='180' valign='top' style='border-right:1px solid #e2e2e2;border-bottom:1px solid #e2e2e2; border-top:1px solid #e2e2e2;'>Mobile</td>
        <td valign='top' style='border-bottom:1px solid #e2e2e2;border-top:1px solid #e2e2e2;'> ".$presentAddressWithPin." </td>
    </tr>
    <tr>
        <td width='180' valign='top' style='border-right:1px solid #e2e2e2;border-bottom:1px solid #e2e2e2; border-top:1px solid #e2e2e2;'>Mobile</td>
        <td valign='top' style='border-bottom:1px solid #e2e2e2;border-top:1px solid #e2e2e2;'> ".$educationalQualification." </td>
    </tr>
    <tr>
        <td width='180' valign='top' style='border-right:1px solid #e2e2e2;border-bottom:1px solid #e2e2e2; border-top:1px solid #e2e2e2;'>Mobile</td>
        <td valign='top' style='border-bottom:1px solid #e2e2e2;border-top:1px solid #e2e2e2;'> ".$motherTongue." </td>
    </tr>
    <tr>
        <td width='180' valign='top' style='border-right:1px solid #e2e2e2;border-bottom:1px solid #e2e2e2; border-top:1px solid #e2e2e2;'>Mobile</td>
        <td valign='top' style='border-bottom:1px solid #e2e2e2;border-top:1px solid #e2e2e2;'> ".$motherTongueProf." </td>
    </tr>
    <tr>
        <td width='180' valign='top' style='border-right:1px solid #e2e2e2;border-bottom:1px solid #e2e2e2; border-top:1px solid #e2e2e2;'>Mobile</td>
        <td valign='top' style='border-bottom:1px solid #e2e2e2;border-top:1px solid #e2e2e2;'> ".$otherLanguagesKnown." </td>
    </tr>
    <tr>
        <td width='180' valign='top' style='border-right:1px solid #e2e2e2;border-bottom:1px solid #e2e2e2; border-top:1px solid #e2e2e2;'>Mobile</td>
        <td valign='top' style='border-bottom:1px solid #e2e2e2;border-top:1px solid #e2e2e2;'> ".$presentOccupation." </td>
    </tr>
    <tr>
        <td width='180' valign='top' style='border-right:1px solid #e2e2e2;border-bottom:1px solid #e2e2e2; border-top:1px solid #e2e2e2;'>Mobile</td>
        <td valign='top' style='border-bottom:1px solid #e2e2e2;border-top:1px solid #e2e2e2;'> ".$otherSkills." </td>
    </tr>
    <tr>
        <td width='180' valign='top' style='border-right:1px solid #e2e2e2;border-bottom:1px solid #e2e2e2; border-top:1px solid #e2e2e2;'>Mobile</td>
        <td valign='top' style='border-bottom:1px solid #e2e2e2;border-top:1px solid #e2e2e2;'> ".$digitalSkills." </td>
    </tr>
    <tr>
        <td width='180' valign='top' style='border-right:1px solid #e2e2e2;border-bottom:1px solid #e2e2e2; border-top:1px solid #e2e2e2;'>Mobile</td>
        <td valign='top' style='border-bottom:1px solid #e2e2e2;border-top:1px solid #e2e2e2;'> ".$priorTheatreExperienc." </td>
    </tr>
    <tr>
        <td width='180' valign='top' style='border-right:1px solid #e2e2e2;border-bottom:1px solid #e2e2e2; border-top:1px solid #e2e2e2;'>Mobile</td>
        <td valign='top' style='border-bottom:1px solid #e2e2e2;border-top:1px solid #e2e2e2;'> ".$professionalSkills." </td>
    </tr>
    <tr>
        <td width='180' valign='top' style='border-right:1px solid #e2e2e2;border-bottom:1px solid #e2e2e2; border-top:1px solid #e2e2e2;'>Mobile</td>
        <td valign='top' style='border-bottom:1px solid #e2e2e2;border-top:1px solid #e2e2e2;'> ".$bhoomikaSource." </td>
    </tr>
    <tr>
        <td width='180' valign='top' style='border-right:1px solid #e2e2e2;border-bottom:1px solid #e2e2e2; border-top:1px solid #e2e2e2;'>Mobile</td>
        <td valign='top' style='border-bottom:1px solid #e2e2e2;border-top:1px solid #e2e2e2;'> ".$futurePlans." </td>
    </tr>
    <tr>
        <td width='180' valign='top' style='border-right:1px solid #e2e2e2;border-bottom:1px solid #e2e2e2; border-top:1px solid #e2e2e2;'>Mobile</td>
        <td valign='top' style='border-bottom:1px solid #e2e2e2;border-top:1px solid #e2e2e2;'> ".$appBefore." </td>
    </tr>
    <tr>
        <td width='180' valign='top' style='border-right:1px solid #e2e2e2;border-bottom:1px solid #e2e2e2; border-top:1px solid #e2e2e2;'>Mobile</td>
        <td valign='top' style='border-bottom:1px solid #e2e2e2;border-top:1px solid #e2e2e2;'> ".$backstageConsent." </td>
    </tr>
    <tr>
        <td width='180' valign='top' style='border-right:1px solid #e2e2e2;border-bottom:1px solid #e2e2e2; border-top:1px solid #e2e2e2;'>Mobile</td>
        <td valign='top' style='border-bottom:1px solid #e2e2e2;border-top:1px solid #e2e2e2;'> ".$rulesConsent." </td>
    </tr>
    <tr>
        <td width='180' valign='top' style='border-right:1px solid #e2e2e2;border-bottom:1px solid #e2e2e2; border-top:1px solid #e2e2e2;'>Mobile</td>
        <td valign='top' style='border-bottom:1px solid #e2e2e2;border-top:1px solid #e2e2e2;'> ".$imgAttached." </td>
    </tr>
     
   
</table>
</body>
</html>
";
	
	
	$headers .= "Content-type:text/html;charset=iso-8859-1" . "\r\n";
	$headers .= 'From: ' ."$email". "\r\n";
	mail($to,$subject,$message,$headers);
	header("Location:reg-thankyou.html");

?>