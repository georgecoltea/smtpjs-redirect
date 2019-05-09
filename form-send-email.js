jQuery(".submit").click(function(){

	//Get form values

	let traditional = document.getElementById('traditional').value;
	let value = document.getElementById('value').value;
	let indraznet = document.getElementById('indraznet').value;
	let sofisticat = document.getElementById('sofisticat').value;
	let handCrafted = document.getElementById('hand-crafted').value;
	let serios = document.getElementById('serios').value;
	let standOut = document.getElementById('stand-out').value;
	let startup = document.getElementById('startup').value;
	let tanar = document.getElementById('tanar').value;
	let feminim = document.getElementById('feminim').value;
	let venit = document.getElementById('venit').value;
	let numeBrand = document.getElementById('message_nume_brand').value;
	let slogan = document.getElementById('message_slogan').value;
	let textAditional = document.getElementById('message_text_aditional').value;
	let descriereCompanie = document.getElementById('message_descriere_companie').value;
	let idei = document.getElementById('message_idei').value;
	let competition = document.getElementById('message_competition_links').value;
	let likedProjects = document.getElementById('message_liked_projects').value;
	let firstName = document.getElementById('message_first_name').value;
	let lastName = document.getElementById('message_last_name').value;
	let companyName = document.getElementById('message_company_name').value;
	let cui = document.getElementById('message_cui').value;
	let bank = document.getElementById('message_bank').value;
	let accountNumber = document.getElementById('message_numar_cont').value;
	let companyAdress = document.getElementById('message_sediu_social').value;
	let city = document.getElementById('message_oras').value;
	let state = document.getElementById('message_judet').value;
	let email = document.getElementById('message_email').value;
	let phone = document.getElementById('message_phone').value;
    

	//Send email to both user and admin
	if(numeBrand && descriereCompanie &&  email && phone && firstName && 
	lastName && companyName && cui){

		Email.send({
	    SecureToken : "a438a23b-f1bf-4870-9578-88eb735d1edc",
	    To : 'george.coltea@wizzdesign.ro',
	    From : "brief@logomarket.ro",
	    Subject : "Proiect nou Logomarket",
	    Body : `
	    Avem un proiect nou de la: ${firstName} ${lastName} <br/>
	    Numar telefon: ${phone} <br/>
	    Adresa email: ${email}<br/>
	    Date facturare firma: <br/>
	    <ul>
	    	<li>Nume companie: ${companyName}</li>
	    	<li>Cod fiscal: ${cui}</li>
	    	<li>Banca: ${bank}</li>
	    	<li>Numar cont: ${accountNumber}</li>
	    	<li>Adresa sediu social: ${companyAdress}</li>
	    	<li>Oras: ${city}</li>
	    	<li>Judet: ${state}</li>
	    </ul>
	    <br/>

	    Date despre proiect:<br/>
	    <ul>
	    	<li>Numele brandului: ${numeBrand}</li>
	    	<li>Slogan: ${slogan}</li>
	    	<li>Text aditional: ${textAditional}</li>
	    	<li>Descriere companie: ${descriereCompanie}</li>
	    	<li>Idei sau aspecte importante: ${idei}</li>
	    	<li>Competitie: ${competition}</li>
	    	<li>Proiecte care ii plac: ${likedProjects}</li>
	    	<li>Design curent: </li>
	    </ul><br/>

	    Clientul brandului:<br/>
	    <ul>
	    	<li>Tanar - ${tanar} - Matur</li>
	    	<li>Feminin - ${feminim} - Masculin</li>
	    	<li>Venit mic - ${venit} - Venit mare</li>
	    </ul><br/>

	    Stilul clientului:<br/>
	    <ul>
	    	<li>Traditional - ${traditional} - Modern</li>
	    	<li>Value - ${value} - Premium</li>
	    	<li>Indraznet - ${indraznet} - Subtil</li>
	    	<li>Sofisticat - ${sofisticat} - Simplu</li>
	    	<li>Handcrafted - ${handCrafted} - Minimalist</li>
	    	<li>Serios - ${serios} - Jucaus</li>
	    	<li>Stand out from the crowd - ${standOut} - Fit in, look as if it belongs in the category</li>
	    	<li>Look as if it has been around for 100 years - ${startup} - Startup ready to take on the world</li>
	    </ul><br/>

	    Design apreciat: ${likedImages} <br/>
	    Design neapreciat: ${dislikedImages} <br/>

	    `,
	}).then(
	  () => window.location.replace("/logomarket/thank-you")
	  //message => alert(message)
	);

	Email.send({
	    SecureToken : "a438a23b-f1bf-4870-9578-88eb735d1edc",
	    To : email,
	    From : "Logomarket <brief@logomarket.ro>",
	    Subject : "Multumim pentru plm",
	    Body : "asfafafa"
	}).then(
	  () => window.location.replace("/logomarket/thank-you")
	 );

}



});