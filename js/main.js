const app = Vue.createApp({ 
    data() 
    { return { 
        intro: 'Welcome to my Vue template', 
        Navn: 'Else', 
        Efternavn: 'Munk', 
        VisEfternavn:false, 
        nr:'',
        Studerende: [
            {SFornavn:'Else',sEfternavn:'Munk',Alder: 20,VissEfternavn: false,mobilNr:'75444'}, 
            {SFornavn:'Mille',sEfternavn:'Skov',Alder: 18,VissEfternavn: false,mobilNr:'8855'}, 
            {SFornavn:'Magnus',sEfternavn:'Lund',Alder: 27,VissEfternavn: false,mobilNr:'86525'}, 
            {SFornavn:'oliver',sEfternavn:'Skovbjerg',Alder:32,VissEfternavn: false,mobilNr:'83252'} 

        ] } 
    }, 
    methods: 
    {  
        vis(){ 
            if(this.VisEfternavn==true) 
            { 
                this.VisEfternavn=false 
            } 
            else 
            { 
                this.VisEfternavn=true 
            } 
            },
        ViSkjulStuderendeEfternavn(index){ 
                if(this.Studerende[index].VissEfternavn==true) 
                { 
                    this.Studerende[index].VissEfternavn=false 
                } 
                else 
                { 
                    this.Studerende[index].VissEfternavn=true 
                } 
        } }, 
    computed:
    { 
        myComputed() 
        { 
            return '' 
        }, 
        combinedName() { 
            return this.Navn +' '+ this.Efternavn + ' ' 
        }, 
        StudentName()
        { 
            return this.Studerende.sEfternavn 
        }, 
        StudentEdternavn()
        { 
            return this.Studerende.sEfternavn 
        } 
    } 
})