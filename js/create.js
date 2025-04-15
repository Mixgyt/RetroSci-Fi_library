export function create()
{
    const createAside = document.querySelector('.create-asidebar')

    if (createAside){
        const asidebar = document.createElement('div');
        asidebar.className = 'slide-menu open position-fixed height-100vh';
    
        const asidebarContenido = document.createElement('div');
        asidebarContenido.className = 'slide-menu__content';
    
        const asidebarTitulo = document.createElement('h2');
        asidebarTitulo.className = 'slide-menu__title';
        asidebarTitulo.textContent = 'Titulo';

        asidebarContenido.appendChild(asidebarTitulo);
    
        const lista = document.createElement('ul');
        lista.classList.add('slide-menu__list');
    
        const subtitulo = document.createElement('p');
        subtitulo.className = 'text-warning-neon';
        subtitulo.textContent = 'Subtitulo';
        
        lista.appendChild(subtitulo);
    
        for (let i = 1; i <=2; i++)
            {
                const item = document.createElement('li');
                item.className = 'slide-menu__item';
    
                const link = document.createElement('a');
                link.className = 'estilo-brillo';
                
                link.textContent = `item ${i}`;
    
                item.appendChild(link);
                lista.appendChild(item);
            }

        const boton = document.createElement('button');
        boton.className = 'slide-menu__toggle';

        asidebar.appendChild(boton);
    
        asidebarContenido.appendChild(lista);
        asidebar.appendChild(asidebarContenido);
        createAside.appendChild(asidebar);
    }


    const createNav = document.querySelector('.create-navbar')
    if(createNav)
        {
            const navbar = document.createElement('div');
            navbar.className = 'navbar bg-secondary estilo-brillo border rounded border-secondary hover-neon position-sticky top-0 p-1';
    
            const navbarHeader = document.createElement('div');
            navbarHeader.className = 'navbar-header';
    
            const navbarBrand = document.createElement('div');
            navbarBrand.className = 'navbar-brand';
    
            const logo = document.createElement('div');
            logo.className = 'img-logo-prin-white';
            navbarBrand.appendChild(logo);
            navbarBrand.appendChild(document.createTextNode('Titulo'));
    
            const navbarToggle = document.createElement('button');
            navbarToggle.className = 'navbar-toggle';
    
            const menuIcon = document.createElement('div');
            menuIcon.className = 'img-menu-white';
            navbarToggle.appendChild(menuIcon);
    
            navbarHeader.appendChild(navbarBrand);
            navbarHeader.appendChild(navbarToggle);
    
            const navbarNav = document.createElement('div');
            navbarNav.className = 'navbar-nav';
    
            const links = [
                { href: '#', text: 'Item', target: '' },
                { href: '#', text: 'Item', target: '' },
  
            ];
    
            links.forEach(linkData => {
                const link = document.createElement('a');
                link.className = 'nav-item rounded-pill';
                link.href = linkData.href;
                link.textContent = linkData.text;
                if (linkData.target) {
                    link.target = linkData.target;
                }
                navbarNav.appendChild(link);
            });
    
            navbar.appendChild(navbarHeader);
            navbar.appendChild(navbarNav);
    
            createNav.appendChild(navbar);
        }



    const createCard = document.querySelector('.create-card');

    if(createCard)
        {
            const card = document.createElement('div');
            card.className = 'card text-dark bg-primary mb-3';
            card.style.maxWidth = '18rem';
        
            const cardHeader = document.createElement('div');
            cardHeader.className = 'card-header';
            cardHeader.textContent = 'Encabezado';
        
            const cardBody = document.createElement('div');
            cardBody.className = 'card-body';
        
            const cardTitle = document.createElement('h5');
            cardTitle.className = 'card-title';
            cardTitle.textContent = 'titulo';
        
            const cardText = document.createElement('p');
            cardText.className = 'card-text';
            cardText.textContent = 'lorem ipsum dolor sit amet, consectetur adipiscing elit.';
        
            cardBody.appendChild(cardTitle);
            cardBody.appendChild(cardText);
        
            card.appendChild(cardHeader);
            card.appendChild(cardBody);
        
            document.body.appendChild(card);
            createCard.appendChild(card);
        }


    const createForm = document.querySelector('.create-form');

    if(createForm)
        {

        const form = document.createElement('form');

        const fieldset = document.createElement('fieldset');
        fieldset.className = 'p-4';

        const legend = document.createElement('legend');
        legend.textContent = 'Legend';
        fieldset.appendChild(legend);

        const row = document.createElement('div');
        row.className = 'row';

        const labelEmail = document.createElement('label');
        labelEmail.setAttribute('for', 'staticEmail');
        labelEmail.className = 'col-sm-2 col-form-label';
        labelEmail.textContent = 'Email';

        const colDiv = document.createElement('div');
        colDiv.className = 'col-sm-10';

        const inputEmail = document.createElement('input');
        inputEmail.type = 'text';
        inputEmail.readOnly = true;
        inputEmail.className = 'form-control';
        inputEmail.id = 'staticEmail';
        inputEmail.value = 'email@example.com';

        colDiv.appendChild(inputEmail);
        row.appendChild(labelEmail);
        row.appendChild(colDiv);
        fieldset.appendChild(row);

        const emailDiv = document.createElement('div');

        const emailLabel = document.createElement('label');
        emailLabel.setAttribute('for', 'exampleInputEmail1');
        emailLabel.className = 'form-label mt-4';
        emailLabel.textContent = 'Email address';

        const emailInput = document.createElement('input');
        emailInput.type = 'email';
        emailInput.className = 'form-control';
        emailInput.id = 'exampleInputEmail1';
        emailInput.setAttribute('aria-describedby', 'emailHelp');
        emailInput.placeholder = 'Enter email';

        const emailSmall = document.createElement('small');
        emailSmall.id = 'emailHelp';
        emailSmall.className = 'form-text text-muted';
        emailSmall.textContent = 'Info';

        emailDiv.appendChild(emailLabel);
        emailDiv.appendChild(emailInput);
        emailDiv.appendChild(emailSmall);
        fieldset.appendChild(emailDiv);

        const selectDiv = document.createElement('div');

        const selectLabel = document.createElement('label');
        selectLabel.setAttribute('for', 'exampleSelect1');
        selectLabel.className = 'form-label mt-4';
        selectLabel.textContent = 'select';

        const select = document.createElement('select');
        select.className = 'form-select';
        select.id = 'exampleSelect1';

        const option1 = document.createElement('option');
        option1.textContent = '1';
        const option2 = document.createElement('option');
        option2.textContent = '2';

        select.appendChild(option1);
        select.appendChild(option2);
        selectDiv.appendChild(selectLabel);
        selectDiv.appendChild(select);
        fieldset.appendChild(selectDiv);

        const switchFieldset = document.createElement('fieldset');
        const switchLegend = document.createElement('legend');
        switchLegend.className = 'mt-4';
        switchLegend.textContent = 'Switches';

        const switchDiv = document.createElement('div');
        switchDiv.className = 'form-check form-switch';

        const switchInput = document.createElement('input');
        switchInput.className = 'form-check-input';
        switchInput.type = 'checkbox';
        switchInput.id = 'flexSwitchCheckDefault';

        const switchLabel = document.createElement('label');
        switchLabel.className = 'form-check-label';
        switchLabel.setAttribute('for', 'flexSwitchCheckDefault');
        switchLabel.textContent = 'Switch';

        switchDiv.appendChild(switchInput);
        switchDiv.appendChild(switchLabel);
        switchFieldset.appendChild(switchLegend);
        switchFieldset.appendChild(switchDiv);

        fieldset.appendChild(switchFieldset);

        const radioFieldset = document.createElement('fieldset');
        const radioLegend = document.createElement('legend');
        radioLegend.className = 'mt-4';
        radioLegend.textContent = 'Radio buttons';

        const radioDiv = document.createElement('div');
        radioDiv.className = 'form-check';

        const radioInput1 = document.createElement('input');
        radioInput1.className = 'form-check-input';
        radioInput1.type = 'radio';
        radioInput1.name = 'optionsRadios';
        radioInput1.id = 'opt1';
        radioInput1.value = 'option1';

        const radioInput2 = document.createElement('input');
        radioInput2.className = 'form-check-input';
        radioInput2.type = 'radio';
        radioInput2.name = 'optionsRadios';
        radioInput2.id = 'opt2';
        radioInput2.value = 'option2';

        const radioLabel = document.createElement('label');
        radioLabel.className = 'form-check-label';
        radioLabel.setAttribute('for', 'optionsRadios1');
        radioLabel.textContent = 'Check';

        radioDiv.appendChild(radioInput1);
        radioDiv.appendChild(radioInput2);
        radioDiv.appendChild(radioLabel);
        radioFieldset.appendChild(radioLegend);
        radioFieldset.appendChild(radioDiv);

        fieldset.appendChild(radioFieldset);

        const button = document.createElement('button');
        button.type = 'submit';
        button.className = 'btn btn-primary';
        button.textContent = 'Submit';

        fieldset.appendChild(button);
        form.appendChild(fieldset);

        createForm.appendChild(form);

    }


}
