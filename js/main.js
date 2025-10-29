const app = Vue.createApp({ 
    data() 
    { return { 
        intro: 'Welcome to my Vue template', 
        Navn: 'Else', 
        Efternavn: 'Munk', 
        VisEfternavn:false, 
        nr:'',
        //Data relateret til studerende som jason objekter(Benytter VisEfternavn fra tidligere data sektion)
        sNavn:'',
        sEfterNavn:'',
        sAlder:'',
        sMobil:'',
        Studerende: [
            {SFornavn:'Else',sEfternavn:'Munk',Alder: 20,VissEfternavn: false,mobilNr:'75444'}, 
            {SFornavn:'Mille',sEfternavn:'Skov',Alder: 18,VissEfternavn: false,mobilNr:'8855'}, 
            {SFornavn:'Magnus',sEfternavn:'Lund',Alder: 27,VissEfternavn: false,mobilNr:'86525'}, 
            {SFornavn:'Oliver',sEfternavn:'Skovbjerg',Alder:32,VissEfternavn: false,mobilNr:'83252'} 

        ],
        //Data relateret til Studerende som array
        StuderendeArray: [{Afornavn:'Else Munk'},{Afornavn:'Mille Skov'},{Afornavn:'Magnus Lund'},{Afornavn:'Oliver Skovbjerg'} ],
        ANavn:'', 
    } 
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
        }, 
        AddStuderendeArray(){
            this.StuderendeArray.push({Afornavn:this.ANavn})
            this.ANavn=''
        },
        sAddStuderende(){
            this.Studerende.push({
                                    SFornavn:this.sNavn,
                                    sEfternavn:this.sEfterNavn,
                                    Alder:this.sAlder,
                                    VissEfternavn:this.VisEfternavn,
                                    mobilNr:this.sMobil
                                })
            this.sNavn=''
            this.sEfterNavn=''
            this.sAlder=''
            this.sMobil=''
        }
    }, 
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