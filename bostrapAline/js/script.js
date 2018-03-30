function checkInfos(nom)
{	/**
	* mode strict pour pas faire de betises
	*/
	"use strict";
	
	/**
	* variables correspondant au noms des balises dans mon HTML
	* ok est la variable qui dit si la les champs sont bien executés ok==true --> Pas de probleme
	* Pensez à modifier avec le nom de vos input et div sinon ça marchera pas :P
	* Dans mon HTML mon input password a pour id="txPwd" et mon div d'erreur : id="errorPwd"
	*/
	var element = "tx"+nom;
	var elementError = "error"+nom;
	var ok = true;
	
	
	/**
	* si le formulaire est vide 
	*/
	if(document.getElementById(element).value.length == 0)
		{
			
			/**
			* On affiche message d'erreur et on insique que ça c'est mal passé dans ok
			*/
			document.getElementById(elementError).innerHTML ="Impossible to have a blank " + nom;
			ok = false;
		}
	else
	{
		/**
		* Si la taille du mot tapé < 3
		*/
		if(document.getElementById(element).value.length<4)
			{	
				/**
				* On affiche message d'erreur et on insique que ça c'est mal passé dans ok
				*/
				document.getElementById(elementError).innerHTML =nom + " must be > 3";
				ok = false;
			}
	}
	
	/**
	* Si il y a eu un problème on renvoie false
	* sinon true
	*/
	if(!ok)
		{
			return false;
		}
	else
		{
			return true;
		}
}


function checkForm()
{
	"use strict";
	/**
	* Si les champs sont bien remplis on renvoie true
	* sinon false
	*/
	if(checkInfos("Mail")|| checkInfos("Pwd"))
		{
			return true;
		}
	else
		{
			return false;
		}
}