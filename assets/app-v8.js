const MURETTO_BUILD='20260713-hotfix1';
/* ============ 24 GP 2026 ============ */
const CIRCUITS = [
 {name:"GP d'Australia", city:"Melbourne", flag:"🇦🇺", laps:58, rain:.25, temp:24, sc:.012, deg:1.0, pit:20, ot:.35},
 {name:"GP di Cina", city:"Shanghai", flag:"🇨🇳", laps:56, rain:.20, temp:18, sc:.008, deg:1.1, pit:22, ot:.25},
 {name:"GP del Giappone", city:"Suzuka", flag:"🇯🇵", laps:53, rain:.35, temp:17, sc:.009, deg:1.15, pit:22, ot:.40},
 {name:"GP del Bahrain", city:"Sakhir", flag:"🇧🇭", laps:57, rain:.02, temp:28, sc:.007, deg:1.25, pit:21, ot:.20},
 {name:"GP d'Arabia Saudita", city:"Gedda", flag:"🇸🇦", laps:50, rain:.02, temp:30, sc:.016, deg:0.85, pit:20, ot:.30},
 {name:"GP di Miami", city:"Miami", flag:"🇺🇸", laps:57, rain:.30, temp:31, sc:.011, deg:1.05, pit:20, ot:.30},
 {name:"GP del Canada", city:"Montréal", flag:"🇨🇦", laps:70, rain:.30, temp:22, sc:.015, deg:0.95, pit:18, ot:.25},
 {name:"GP di Monaco", city:"Monte Carlo", flag:"🇲🇨", laps:78, rain:.20, temp:22, sc:.014, deg:0.7, pit:19, ot:.95, tight:true},
 {name:"GP di Barcellona-Catalunya", city:"Barcellona", flag:"🇪🇸", laps:66, rain:.10, temp:26, sc:.006, deg:1.2, pit:21, ot:.45},
 {name:"GP d'Austria", city:"Spielberg", flag:"🇦🇹", laps:71, rain:.30, temp:23, sc:.009, deg:1.0, pit:19, ot:.20},
 {name:"GP di Gran Bretagna", city:"Silverstone", flag:"🇬🇧", laps:52, rain:.35, temp:19, sc:.009, deg:1.1, pit:20, ot:.25},
 {name:"GP del Belgio", city:"Spa-Francorchamps", flag:"🇧🇪", laps:44, rain:.45, temp:16, sc:.010, deg:1.05, pit:18, ot:.20, long:true},
 {name:"GP d'Ungheria", city:"Budapest", flag:"🇭🇺", laps:70, rain:.20, temp:28, sc:.008, deg:1.1, pit:20, ot:.70, tight:true},
 {name:"GP d'Olanda", city:"Zandvoort", flag:"🇳🇱", laps:72, rain:.30, temp:19, sc:.012, deg:1.0, pit:21, ot:.60},
 {name:"GP d'Italia", city:"Monza", flag:"🇮🇹", laps:53, rain:.15, temp:26, sc:.007, deg:0.9, pit:23, ot:.18, long:true},
 {name:"GP di Spagna", city:"Madrid (IFEMA)", flag:"🇪🇸", laps:57, rain:.10, temp:27, sc:.013, deg:1.0, pit:20, ot:.50},
 {name:"GP d'Azerbaigian", city:"Baku", flag:"🇦🇿", laps:51, rain:.05, temp:24, sc:.018, deg:0.85, pit:19, ot:.25, long:true},
 {name:"GP di Singapore", city:"Marina Bay", flag:"🇸🇬", laps:62, rain:.40, temp:30, sc:.020, deg:1.05, pit:23, ot:.75, tight:true},
 {name:"GP degli Stati Uniti", city:"Austin", flag:"🇺🇸", laps:56, rain:.15, temp:27, sc:.008, deg:1.15, pit:20, ot:.30},
 {name:"GP del Messico", city:"Città del Messico", flag:"🇲🇽", laps:71, rain:.20, temp:21, sc:.010, deg:0.75, pit:19, ot:.40},
 {name:"GP di San Paolo", city:"Interlagos", flag:"🇧🇷", laps:71, rain:.45, temp:23, sc:.014, deg:1.0, pit:18, ot:.22},
 {name:"GP di Las Vegas", city:"Las Vegas", flag:"🇺🇸", laps:50, rain:.02, temp:12, sc:.012, deg:0.8, pit:20, ot:.22, cold:true, long:true},
 {name:"GP del Qatar", city:"Lusail", flag:"🇶🇦", laps:57, rain:.02, temp:28, sc:.009, deg:1.35, pit:20, ot:.40, maxStint:20},
 {name:"GP di Abu Dhabi", city:"Yas Marina", flag:"🇦🇪", laps:58, rain:.02, temp:27, sc:.007, deg:0.95, pit:21, ot:.45, lateSC:true},
];

/*
  Calibrazione didattica, non dati riservati dei team.
  harvest = facilità relativa di recupero; straight = rendimento relativo del deployment;
  traction = sensibilità delle posteriori alla coppia nelle zone lente.
*/
const ENERGY_TRACK = [
 {harvest:.95,straight:.75,traction:.55},{harvest:1.00,straight:.85,traction:.65},{harvest:.85,straight:.65,traction:.45},{harvest:1.15,straight:.80,traction:.90},
 {harvest:.85,straight:.95,traction:.45},{harvest:1.05,straight:.90,traction:.80},{harvest:1.20,straight:.90,traction:.85},{harvest:1.10,straight:.35,traction:.95},
 {harvest:.90,straight:.65,traction:.55},{harvest:1.10,straight:.95,traction:.85},{harvest:.80,straight:.85,traction:.40},{harvest:.95,straight:1.00,traction:.50},
 {harvest:1.05,straight:.40,traction:.90},{harvest:.95,straight:.35,traction:.75},{harvest:1.00,straight:1.00,traction:.55},{harvest:1.00,straight:.70,traction:.70},
 {harvest:1.15,straight:1.00,traction:.80},{harvest:1.20,straight:.50,traction:.95},{harvest:1.00,straight:.80,traction:.75},{harvest:1.05,straight:.95,traction:.75},
 {harvest:1.05,straight:.80,traction:.80},{harvest:.95,straight:1.00,traction:.65},{harvest:.80,straight:.75,traction:.50},{harvest:1.05,straight:.90,traction:.75}
];

/* ============ I 24 DOSSIER (3 pagine + aggiornamenti energia 2026) ============ */
const LESSONS = [
{t:"Ripartenze infinite", y:"Australia 2023", fx:"sc-pit",
 ev:"Tre bandiere rosse e ripartenze da fermo nel finale: chi arrivò alle ripartenze con gomme adatte e lucidità guadagnò posizioni a valanga; altri buttarono la gara in una curva.",
 ins:"Le neutralizzazioni azzerano i distacchi e regalano cambi gomma quasi gratuiti: tieni sempre una mescola pronta per la ripartenza e non giocarti tutto nel primo giro dopo il via.",
 q:"Safety car a 6 giri dalla fine, hai gomme vecchie: cosa fai?",
 o:["Resto fuori per non perdere la posizione","Box: il gruppo è compatto, la sosta costa pochissimo","Spingo al massimo dietro la safety car"], a:1,
 ex:"Con il gruppo rallentato e compattato la sosta costa circa la metà: riparti incollato e con un'arma in più.",
 pages:[
 "<span class='kicker'>Pagina 1 · Il contesto</span><br>Melbourne, aprile 2023, terzo round del mondiale. L'Albert Park è un semi-cittadino ricavato attorno a un lago: muri vicini, poca via di fuga, e una storia ricca di safety car. Quel weekend la Red Bull domina, ma il copione viene riscritto dalla direzione gara: la Formula 1 moderna preferisce la <b>bandiera rossa</b> alla safety car nei finali, per non far finire le corse in regime neutralizzato davanti al pubblico. Ogni bandiera rossa significa una cosa enorme per gli strateghi: gara sospesa, distacchi azzerati, <b>cambio gomme gratuito</b> in griglia e ripartenza da fermo. In pratica, una seconda partenza con tutto da rigiocare — e infatti quel giorno ce ne furono tre.",
 "<span class='kicker'>Pagina 2 · La cronaca</span><br>La prima interruzione arriva presto, dopo un incidente nelle fasi iniziali. La gara riparte, si stabilizza, e sembra avviarsi verso una conclusione normale — finché un botto a pochi giri dal termine costringe la direzione a una seconda bandiera rossa. Ripartenza da fermo con due giri da percorrere: è di fatto una gara sprint di una curva. Nel caos del via si toccano in tanti: vetture nella ghiaia, detriti ovunque, classifica stravolta. Terza bandiera rossa. La direzione decide di far sfilare le vetture in regime neutralizzato ripristinando l'ordine precedente al caos: chi aveva perso tutto riebbe quasi tutto, chi aveva guadagnato d'azzardo restò beffato. Vinse chi era rimasto lucido e fuori dai guai.",
 "<span class='kicker'>Pagina 3 · L'analisi del muretto</span><br>Tre lezioni concrete. <b>Primo:</b> ogni neutralizzazione è un reset — i secondi di vantaggio costruiti in 50 giri spariscono, quindi il vantaggio va difeso con margine di gomma, non solo con il cronometro. <b>Secondo:</b> il cambio gomme in bandiera rossa è l'unico veramente gratuito della F1: rifiutarlo è quasi sempre un errore. <b>Terzo:</b> nelle ripartenze il rischio è asimmetrico — al primo giro dopo il via puoi guadagnare una posizione o perderne dieci nella ghiaia. Nel gioco: quando vedi la bandiera rossa scegli sempre la gomma migliore per i giri rimanenti (soft se sono pochi), e nelle ripartenze ricorda che la posizione si difende anche non esagerando."]},

{t:"La gomma che muore", y:"Cina 2007", fx:"tyre-cliff",
 ev:"Hamilton, in lotta per il suo primo mondiale da rookie, restò in pista su intermedie ormai distrutte mentre l'asfalto si asciugava: finì nella ghiaia proprio all'ingresso della pit lane.",
 ins:"Quando la gomma è finita, ogni giro extra costa secondi e moltiplica il rischio di errore: il pit in ritardo è quasi sempre peggio di un pit anticipato.",
 q:"La pista si asciuga, le tue inter sono consumate e perdi 2s al giro: cosa fai?",
 o:["Aspetto che la pista sia perfettamente asciutta","Box subito per le slick: il punto di pareggio è già passato","Spingo di più per compensare la perdita"], a:1,
 ex:"Se perdi già 2s al giro, ogni giro d'attesa è tempo regalato ai rivali — e su gomma morta l'errore è dietro l'angolo.",
 pages:[
 "<span class='kicker'>Pagina 1 · Il contesto</span><br>Shanghai, ottobre 2007, penultima gara del mondiale. Lewis Hamilton è un rookie che sta facendo l'impensabile: guida il campionato con un margine confortevole sul compagno Alonso e su Raikkonen, e gli basta amministrare. La gara parte su pista bagnata, tutti su gomme intermedie. La McLaren è davanti e controlla. Ma il meteo cinese fa quello che fa sempre: la pioggia si ferma, l'asfalto comincia ad asciugarsi, e su pista che si asciuga le intermedie si <b>mangiano vive</b> — il battistrada morbido, progettato per l'acqua, si surriscalda e si consuma a vista d'occhio. È il momento in cui il muretto deve decidere: quando passare alle slick?",
 "<span class='kicker'>Pagina 2 · La cronaca</span><br>La McLaren temporeggia. Forse aspetta un'altra perturbazione, forse vuole coprire i rivali, forse semplicemente esita. Intanto le televisioni inquadrano le gomme di Hamilton: la mescola è finita al punto che si intravede la <b>tela bianca</b> sotto il battistrada. Il pilota perde secondi al giro, scivola ovunque, e chiede lumi via radio. Quando finalmente arriva la chiamata ai box, è tardi: nella lenta stradina d'ingresso della pit lane, su quelle gomme senza più grip, Hamilton perde l'avantreno e si insabbia nella minuscola via di fuga in ghiaia. La monoposto è intatta, il motore gira, ma non c'è verso di uscire. Primo ritiro stagionale, zero punti. Raikkonen vince, e una settimana dopo, in Brasile, gli soffierà il titolo per un solo punto.",
 "<span class='kicker'>Pagina 3 · L'analisi del muretto</span><br>Il caso Cina 2007 è il manuale di cosa significa <b>oltrepassare il punto di pareggio</b>. Il calcolo è freddo: se la sosta costa ~22 secondi e su gomma finita perdi 2-3 secondi al giro, dopo 8-10 giri di esitazione hai già pagato la sosta… senza farla. E c'è il costo nascosto, quello che decise il mondiale: su una gomma morta la probabilità di errore esplode — bloccaggi, traiettorie larghe, ghiaia. La regola operativa: quando il distacco dal tuo riferimento cresce per due giri consecutivi e la gomma è oltre l'80%, il dibattito è chiuso, si rientra. Nel gioco: guarda la barra usura e i tempi; se la pista si asciuga e sei su intermedie, il crossover verso le slick va anticipato, mai inseguito."]},

{t:"Diluvio e crossover", y:"Giappone 2022", fx:"rain-commit",
 ev:"Suzuka partì sotto un diluvio e la gara fu a lungo sospesa: alla ripresa, indovinare il giro giusto per passare dalla full wet all'intermedia valse interi podi.",
 ins:"Tra full wet e intermedia ballano 2-3 secondi al giro: guarda i tempi di chi ha già cambiato e, se il dato è chiaro, copia immediatamente.",
 q:"Pioggia in calo: un rivale monta le inter e gira 2s più forte di te. Cosa fai?",
 o:["Aspetto altri 5 giri per essere sicuro","Box al giro successivo: il dato è già chiaro","Resto su full wet fino a pista asciutta"], a:1,
 ex:"Un giro di conferma basta. Ogni giro in più sulla gomma sbagliata sono secondi persi per sempre.",
 pages:[
 "<span class='kicker'>Pagina 1 · Il contesto</span><br>Suzuka, ottobre 2022. Verstappen può chiudere il suo secondo mondiale proprio nel tempio della Honda, ma sul Giappone incombe una perturbazione seria. Suzuka bagnata è una delle prove più difficili del calendario: curvoni veloci in appoggio, drenaggio datato, visibilità nulla nelle scie. Qui la distinzione tra le due gomme da bagnato diventa vitale: la <b>full wet</b> smaltisce moltissima acqua ma è lenta su pista solo umida; l'<b>intermedia</b> è più veloce di 2-3 secondi al giro ma con troppa acqua va in aquaplaning. La finestra in cui conviene passare dall'una all'altra — il <b>crossover</b> — dura pochi giri, e chi la legge meglio vince.",
 "<span class='kicker'>Pagina 2 · La cronaca</span><br>Il via avviene sotto pioggia battente: visibilità da incubo, un incidente quasi immediato e bandiera rossa dopo pochissimi giri. Segue una sospensione lunghissima, oltre due ore, con l'acqua che continua a cadere. Quando la direzione fa ripartire la gara dietro safety car, tutti sono obbligati su full wet — ma la pioggia sta scemando. Nel giro di pochi passaggi la pista entra in finestra da intermedia: i primi che osano il cambio guadagnano immediatamente secondi a ogni settore, e chi tarda anche solo due o tre giri viene scavalcato in blocco. Verstappen domina e, tra calcoli di punteggi su gara accorciata che confondono persino i team, si laurea campione del mondo quel pomeriggio stesso.",
 "<span class='kicker'>Pagina 3 · L'analisi del muretto</span><br>Il crossover non si indovina: si <b>misura</b>. Il metodo del muretto è usare le altre macchine come sensori — appena qualcuno monta l'intermedia, i suoi tempi nei settori dicono subito la verità. Se il suo primo settore è più veloce del tuo di oltre un secondo, il dato è già sufficiente: serve UN giro di conferma, non cinque. La matematica della fretta: con 2.5s/giro di differenza, cinque giri di prudenza extra costano 12 secondi, cioè più di mezza sosta. Vale anche il contrario, da inter a wet quando l'acqua aumenta: lì il costo dell'attesa non è solo tempo, è il rischio aquaplaning. Nel gioco: osserva i simboli gomma in torre — quando i rivali su gomma diversa dalla tua iniziano a guadagnare con costanza, hai già la risposta."]},

{t:"L'undercut", y:"Bahrain 2021", fx:"undercut",
 ev:"Mercedes anticipò la sosta di Hamilton: i giri lanciati su gomma fresca furono così veloci che, quando Verstappen si fermò, si ritrovò dietro. Quella posizione decise la gara.",
 ins:"Fermarti prima del rivale (undercut) funziona quando la gomma nuova vale 1.5-2s al giro: su asfalti abrasivi come Sakhir è l'arma strategica principale.",
 q:"Sei a 1.5s da chi ti precede, gomme simili, pit loss 21s: come lo passi?",
 o:["Aspetto un suo errore in pista","Anticipo la sosta e sfrutto i giri su gomma nuova","Mi fermo un giro dopo di lui"], a:1,
 ex:"Con gomma nuova recuperi 1.5-2s al giro: 2-3 giri di vantaggio bastano a scavalcarlo quando si fermerà.",
 pages:[
 "<span class='kicker'>Pagina 1 · Il contesto</span><br>Sakhir, marzo 2021, gara inaugurale di una stagione che diventerà leggendaria. Per la prima volta dopo anni la Red Bull di Verstappen è davvero più veloce della Mercedes di Hamilton: pole position netta e passo gara superiore. Sulla carta, per il muretto Mercedes non c'è modo di vincere in pista. Ma il Bahrain ha una caratteristica preziosa per chi insegue: un asfalto <b>estremamente abrasivo</b>, ruvido come carta vetrata, che esalta la differenza tra gomma nuova e gomma usata. È l'habitat perfetto dell'<b>undercut</b>: fermarsi PRIMA del rivale per sfruttare i giri su mescola fresca mentre lui arranca su quella vecchia.",
 "<span class='kicker'>Pagina 2 · La cronaca</span><br>Verstappen conduce con un margine di pochi secondi quando la Mercedes gioca d'anticipo: Hamilton ai box molto presto, ben prima della finestra prevista. I suoi primi giri su gomma fresca sono micidiali — oltre un secondo e mezzo al giro più veloce del leader. La Red Bull, per non restare con stint finali troppo lunghi, non può rispondere subito: quando Verstappen si ferma, riemerge <b>dietro</b>. Il sorpasso strategico è compiuto senza un solo attacco in pista. Nel finale Verstappen, su gomme più fresche, raggiunge Hamilton e lo passa pure — ma oltre i limiti della pista alla curva 4: deve restituire la posizione. Hamilton vince difendendosi con gomme contate al millimetro, e il duello dell'anno è servito.",
 "<span class='kicker'>Pagina 3 · L'analisi del muretto</span><br>L'undercut funziona con tre ingredienti, tutti misurabili. <b>Uno:</b> delta gomma alto — su asfalti abrasivi la mescola nuova vale 1.5-2s/giro; su asfalti lisci a volte mezzo secondo e l'undercut muore. <b>Due:</b> aria libera al rientro — se esci dai box dietro un trenino, i giri magici svaniscono nel traffico. <b>Tre:</b> sostenibilità dello stint — anticipare la sosta allunga quello successivo: devi avere la gomma per arrivare in fondo (è il conto che inguaiò la difesa di Verstappen). Il prezzo nascosto: chi fa undercut finisce la gara con gomme più vecchie ed è vulnerabile nel finale. Nel gioco: se sei a meno di 2-3 secondi da chi ti precede, anticipa la sosta di 2-3 giri rispetto al piano e spingi forte nel giro di uscita."]},

{t:"Muri e roulette", y:"Arabia Saudita 2021", fx:"sc-pit",
 ev:"Bandiere rosse, safety car e ripartenze al limite tra i muri di Gedda: il cittadino più veloce del mondo trasformò la strategia in una roulette di neutralizzazioni.",
 ins:"Sui circuiti cittadini veloci la safety car non è un'ipotesi: è una certezza statistica. Pianifica le soste pensando a QUANDO uscirà, non SE uscirà.",
 q:"Giro 15 di 50, gomme al 50%, esce la safety car: cosa fai?",
 o:["Resto fuori, è troppo presto","Box: la sosta costa la metà, è un regalo","Monto le soft e attacco subito"], a:1,
 ex:"In regime di SC il gruppo rallenta e la sosta costa circa metà tempo: spesso conviene anche se sembra presto.",
 pages:[
 "<span class='kicker'>Pagina 1 · Il contesto</span><br>Gedda, dicembre 2021, penultimo atto del duello Hamilton-Verstappen: arrivano appaiati come mai nella storia recente. Il palcoscenico è nuovo di zecca e folle: il cittadino più veloce mai costruito, medie da pista permanente ma <b>muri a centimetri</b> dalle traiettorie, curve cieche in sequenza, zero margine d'errore. Per uno stratega un tracciato così ha una sola lettura: la probabilità che una gara intera fili via senza neutralizzazioni è bassissima. Ogni piano scritto prima del via è una bozza: quello vero si scriverà tra safety car, virtual safety car e bandiere rosse.",
 "<span class='kicker'>Pagina 2 · La cronaca</span><br>E infatti: un incidente porta la safety car, Hamilton e la Mercedes restano in pista, la Red Bull no — poi arriva la <b>bandiera rossa</b>, che regala a chi non si era fermato il cambio gomme gratuito, ribaltando la convenienza. Seguono ripartenze caotiche, contatti, un'altra interruzione, trattative in diretta tra i team e la direzione gara su posizioni e ordini di ripartenza mai viste prima. Tra scintille, sorpassi oltre i limiti e una collisione tra i due contendenti, Hamilton vince e aggancia Verstappen in classifica. Più che una gara, una lezione di sopravvivenza strategica: ogni neutralizzazione aveva riscritto le carte in tavola.",
 "<span class='kicker'>Pagina 3 · L'analisi del muretto</span><br>Sui cittadini il muretto ragiona in modo <b>probabilistico</b>: con una probabilità di safety car per giro alta, su 50 giri l'evento neutralizzazione è quasi certo. Conseguenze pratiche: <b>(1)</b> la sosta in regime di SC costa circa la metà (il gruppo viaggia lento mentre tu sei ai box) — è uno sconto del 50% che capita una volta sola; <b>(2)</b> conviene tenere 'aperta' la finestra pit il più a lungo possibile, così quando la SC esce hai la flessibilità per approfittarne; <b>(3)</b> dopo ogni interruzione il vantaggio costruito è azzerato: non spendere mai tutta la gomma per costruire margini che una neutralizzazione cancella. Nel gioco: a Gedda, Baku, Singapore e Melbourne tieni d'occhio il monitor della direzione gara e tratta ogni SC come un buono sconto da spendere."]},

{t:"La contro-strategia", y:"Miami 2023", fx:"offset",
 ev:"Verstappen partì nono su gomma dura, allungò moltissimo il primo stint e chiuse la gara con medie fresche, divorando chi aveva fatto la scelta opposta e vincendo.",
 ins:"Quando parti dietro, copiare la strategia dei rivali ti lascia dietro: invertire l'ordine delle mescole ti dà gomma più fresca proprio quando serve attaccare.",
 q:"Parti P10 mentre i primi scattano su soft: che gomma scegli?",
 o:["Soft come loro, per non perdere terreno","Dura: allungo e finisco la gara con gomma più fresca","Intermedia, non si sa mai"], a:1,
 ex:"L'offset di mescola ti fa attaccare nel finale con gomma viva contro gomme morte: è il sorpasso preparato 40 giri prima.",
 pages:[
 "<span class='kicker'>Pagina 1 · Il contesto</span><br>Miami, maggio 2023. Verstappen domina il campionato ma sbaglia la qualifica e si ritrova nono in griglia, con il compagno Pérez in pole. La logica del branco direbbe: parti su soft come tutti quelli davanti, recupera subito quel che puoi. Ma il muretto Red Bull legge la gara al contrario. Partire nelle retrovie ha un vantaggio nascosto: <b>non hai una posizione da difendere</b>, quindi puoi permetterti la strategia che gli altri non osano. Se i primi aprono su soft, dovranno fermarsi presto e finire la gara su gomma dura usata. Chi fa l'opposto — dura all'inizio, mescola morbida alla fine — si presenta all'ultimo terzo di gara con il coltello tra i denti.",
 "<span class='kicker'>Pagina 2 · La cronaca</span><br>Al via Verstappen, su gomma dura, non strappa: costruisce. Sorpassa con calma chi gli capita a tiro mentre i leader su soft iniziano a degradare e a fermarsi uno dopo l'altro. Il suo primo stint si allunga oltre metà gara: quando finalmente si ferma e monta le medie fresche, rientra in pista a ridosso di Pérez — che ha gomme dure ormai anziane. Il copione del finale è scritto: giro dopo giro il distacco evapora, e il sorpasso per la vittoria arriva senza che il messicano possa opporre vera resistenza. Non è stato un duello: è stato un appuntamento fissato quaranta giri prima, alla scelta gomme del via.",
 "<span class='kicker'>Pagina 3 · L'analisi del muretto</span><br>Questo è l'<b>offset di mescola</b>: spostare deliberatamente le proprie finestre rispetto ai rivali per avere gomma più fresca nel momento che conta. Funziona perché il vantaggio della gomma non è lineare: 10 giri di differenza di età valgono spesso 1-1.5s/giro nel finale, quando il degrado morde. Le condizioni: serve una macchina abbastanza veloce da non perdere troppo nel primo stint 'lento', e serve disciplina — la tentazione di copiare chi ti sta davanti è fortissima. Il rischio: una safety car nel momento sbagliato può regalare la sosta ai rivali e annullare l'offset. Nel gioco: quando parti P8-P12, prova dura→media o media→soft mentre i primi fanno l'inverso, e tieni il ritmo 'gestione' all'inizio per avere gomma da sparare nel finale."]},

{t:"Mai arrendersi", y:"Canada 2011", fx:"rain-commit",
 ev:"Button vinse all'ultimo giro partendo dall'ultima posizione, dopo sei soste e una pioggia intermittente che sospese la gara per ore: ogni cambio di condizioni fu un'occasione colta.",
 ins:"Con meteo instabile la gara si riapre in continuazione: vince la reattività ad ogni cambiamento, non la fedeltà al piano iniziale.",
 q:"Pioggia a intermittenza per tutta la gara: qual è l'approccio giusto?",
 o:["Decido una strategia e la mantengo fino alla fine","Rivaluto ogni giro: ogni cambio di meteo è un'occasione","Mi fermo solo quando si fermano tutti gli altri"], a:1,
 ex:"Il piano serve per partire. A Montréal vince chi legge la pista giro per giro e ha il coraggio di cambiarlo.",
 pages:[
 "<span class='kicker'>Pagina 1 · Il contesto</span><br>Montréal, giugno 2011. Il circuito Gilles Villeneuve è un nastro tra i muretti su un'isola artificiale: frenate violente, il famigerato 'Muro dei Campioni', e un meteo continentale capace di tutto. Quel giorno il cielo decide di fare sul serio: pioggia al via, pioggia a tratti, un diluvio centrale che costringerà a sospendere la gara per oltre due ore. Sarà la gara più lunga della storia della F1, oltre quattro ore dal semaforo alla bandiera. In condizioni così, la strategia smette di essere un piano e diventa un dialogo continuo con la pista: wet, intermedie, slick, e ritorno — ogni dieci giri la risposta giusta cambia.",
 "<span class='kicker'>Pagina 2 · La cronaca</span><br>La gara di Button è un disastro che diventa capolavoro: un contatto col compagno di squadra Hamilton, una penalità da scontare, un altro contatto con Alonso, una foratura — a un certo punto è <b>ultimo</b>, ventunesimo, con sei passaggi dalla pit lane a referto. Ma ogni volta che le condizioni cambiano, lui e il muretto McLaren azzeccano la mossa: intermedie al momento giusto, slick con coraggio appena la traiettoria si asciuga, ritmo feroce nell'aria pulita. Negli ultimi giri è secondo e vola su Vettel, in testa dall'inizio: la pressione è tale che alla penultima tornata il leader commette il suo unico errore, un mezzo testacoda alla curva 6. Button vince all'ultimo giro una gara che aveva perso dieci volte.",
 "<span class='kicker'>Pagina 3 · L'analisi del muretto</span><br>La lezione non è 'sperare nei miracoli': è che <b>nelle gare instabili il valore delle decisioni si moltiplica</b>. In una gara asciutta normale ci sono 1-2 decisioni vere; a Montréal 2011 ce ne furono dieci, e ogni transizione meteo era un'occasione per guadagnare (o perdere) dieci secondi. Tre regole operative: <b>(1)</b> dimentica i danni del passato — la sosta numero sei si valuta come se fosse la prima; <b>(2)</b> nelle transizioni conta la traiettoria asciutta, non la pista intera: le slick funzionano molto prima di quanto sembri; <b>(3)</b> la pressione fa sbagliare chi sta davanti — restare attaccati ha valore anche quando il sorpasso pare impossibile. Nel gioco: nelle gare a pioggia intermittente non 'sposare' mai una scelta — rivaluta a ogni cambio di stato del cielo."]},

{t:"Indecisione fatale", y:"Monaco 2022", fx:"track-position",
 ev:"La Ferrari richiamò Leclerc ai box e poi cambiò idea via radio quando era già in corsia: il pasticcio gli costò la testa della gara di casa, persa dalla pole position.",
 ins:"A Monte Carlo la posizione in pista vale più di qualsiasi gomma: una sola sosta, fatta bene, con una decisione netta. L'indecisione costa più di una scelta sbagliata.",
 q:"Guidi a Monaco con pioggia in calo, il rivale diretto è appena entrato ai box: cosa fai?",
 o:["Decido durante il giro, magari cambio idea all'ultimo","Scelgo PRIMA e non torno indietro: dentro o fuori","Faccio due soste ravvicinate per coprire tutto"], a:1,
 ex:"Qui non si sorpassa: ogni esitazione o ordine confuso al box è una posizione persa per sempre.",
 pages:[
 "<span class='kicker'>Pagina 1 · Il contesto</span><br>Monte Carlo, maggio 2022. Charles Leclerc, monegasco, ha una maledizione con la gara di casa: non l'ha mai finita. Stavolta ha fatto tutto giusto — pole position con una Ferrari competitiva — e a Monaco la pole è mezza vittoria, perché qui <b>non si sorpassa</b>: strade larghe quanto una monoposto e mezzo, l'unico vero sorpasso possibile è quello ai box. Il giorno della gara, però, piove: partenza ritardata, tutti su gomme da bagnato, e davanti a ogni muretto la sequenza di decisioni più delicata che esista — quando passare alle intermedie, quando alle slick, e come gestire due macchine (Leclerc e Sainz) nella stessa finestra senza farle ostacolare a vicenda.",
 "<span class='kicker'>Pagina 2 · La cronaca</span><br>La pista si asciuga. La Red Bull muove per prima le sue pedine, anticipando i passaggi di gomma. La Ferrari risponde in ritardo e poi commette l'irreparabile: chiama Leclerc ai box per le slick mentre sta valutando di lasciare fuori Sainz, cambia idea via radio — <b>'box, box… no, stay out, stay out!'</b> — quando Charles è ormai oltre il punto di non ritorno, all'imbocco della corsia. Risultato: doppia sosta accodata dietro al compagno, secondi persi fermi in piazzola, e Leclerc che riemerge quarto, dietro a entrambe le Red Bull e a Sainz. Dalla pole al quarto posto senza essere mai stato sorpassato in pista. Vince Pérez, e il team radio di Leclerc diventa il documento di una delle giornate più amare della Ferrari moderna.",
 "<span class='kicker'>Pagina 3 · L'analisi del muretto</span><br>Tre errori da manuale, tutti evitabili. <b>Primo:</b> a Monaco l'unica valuta è la posizione in pista — ogni piano va giudicato chiedendosi 'dietro a chi rientro?', non 'che gomma avrò?'. <b>Secondo:</b> le decisioni vanno chiuse <b>prima</b> del punto di non ritorno: un ordine cambiato quando il pilota è in corsia box è il peggio dei due mondi, paghi la sosta e perdi pure l'alternativa. <b>Terzo:</b> con due macchine in lotta servono priorità chiare decise in anticipo, non negoziate in diretta. La regola generale: una decisione mediocre presa con un giro d'anticipo batte quasi sempre la decisione perfetta presa un giro tardi. Nel gioco: a Monaco e Budapest pianifica UNA sosta, scegli il giro in anticipo e quando armi il pit non tornare indietro."]},
];
LESSONS.push(
{t:"Due soste o tre?", y:"Spagna 2016", fx:"stops-math",
 ev:"La Red Bull scommise su due soste con un diciottenne Verstappen, la Ferrari ne scelse tre: la posizione difesa con gomma più vecchia vinse, e nacque il più giovane vincitore di sempre.",
 ins:"Ogni sosta extra dà passo ma costa la pit loss e ti butta nel traffico: il tempo guadagnato in pista deve SUPERARE i secondi persi ai box. Fai sempre il conto.",
 q:"Pit loss 21s; una sosta extra ti darebbe 0.4s/giro per 30 giri. La fai?",
 o:["Sì: gomma nuova è sempre meglio","No: 0.4×30 = 12s di guadagno, meno dei 21s di sosta","Dipende dal colore della mescola"], a:1,
 ex:"12 secondi guadagnati contro 21 buttati in corsia box: la matematica dice resta fuori.",
 pages:[
 "<span class='kicker'>Pagina 1 · Il contesto</span><br>Barcellona, maggio 2016. La settimana più surreale del decennio: la Red Bull ha appena promosso in squadra Max Verstappen, <b>18 anni</b>, al posto di Kvyat. Davanti, le Mercedes sembrano imprendibili — finché al primo giro Hamilton e Rosberg si eliminano a vicenda nell'erba della curva 4. All'improvviso la vittoria è in palio tra Red Bull e Ferrari, quattro macchine, e diventa una partita a scacchi pura: il Montmeló è la pista-laboratorio per eccellenza, degrado alto, sorpassi difficili, dove la domanda eterna della strategia — <b>meglio due soste o tre?</b> — vale l'intera posta.",
 "<span class='kicker'>Pagina 2 · La cronaca</span><br>I muretti si dividono in diagonale: Red Bull manda Verstappen su una strategia a <b>due soste</b> e Ricciardo su tre; Ferrari fa l'opposto, Raikkonen su due, Vettel su tre. Le tre soste promettono gomma sempre fresca e passo migliore; le due soste promettono posizione in pista. Il finale è il verdetto: Vettel e Ricciardo, pur più rapidi, riemergono dalle soste extra nel traffico e con troppo da recuperare; Raikkonen arriva negli scarichi di Verstappen ma il Montmeló non perdona — non c'è mai abbastanza delta per attaccare davvero. Il diciottenne gestisce le gomme con freddezza glaciale, non sbaglia una staccata e diventa il più giovane vincitore nella storia della Formula 1.",
 "<span class='kicker'>Pagina 3 · L'analisi del muretto</span><br>Il conto delle soste è la tabellina dello stratega. Formula: <b>conviene la sosta extra se (delta passo al giro × giri rimanenti) &gt; pit loss + costo del traffico</b>. Esempio reale: 0.4s/giro per 30 giri = 12s di guadagno teorico contro 21s di pit loss → non conviene, e non abbiamo ancora contato i giri persi dietro ai doppiati. Il 'costo del traffico' è la voce che i dilettanti dimenticano: rientrare 10° invece che 4° può valere 5-10 secondi extra. La posizione in pista, al contrario, ha un valore difensivo: chi sta davanti costringe il rivale a un delta di passo di almeno 1-1.5s per tentare il sorpasso. Nel gioco: prima di chiamare una sosta in più, guarda quanti giri mancano e fai la moltiplicazione — se non batte chiaramente la pit loss, resta fuori."]},

{t:"Pazienza, poi attacco", y:"Austria 2019", fx:"offset",
 ev:"Verstappen, partito male e sprofondato in classifica, si fermò più tardi dei rivali: negli ultimi giri aveva gomme molto più fresche e completò la rimonta passando il leader a due giri dalla fine.",
 ins:"Fermarsi DOPO gli altri ti consegna un finale con gomma fresca: sacrifichi metà gara per dominare l'altra metà. Serve pazienza quando i rivali ti passano 'gratis' ai pit.",
 q:"Sei P4 e i primi tre si sono già tutti fermati: cosa fai?",
 o:["Box subito per copiarli","Allungo lo stint: nel finale avrò gomme più fresche delle loro","Rinuncio alla lotta e gestisco"], a:1,
 ex:"Ogni giro in cui allunghi è un giro di freschezza in più nel momento decisivo della gara.",
 pages:[
 "<span class='kicker'>Pagina 1 · Il contesto</span><br>Spielberg, giugno 2019. Caldo torrido sulle colline stiriane, aria sottile (il circuito è a quasi 700 metri), giro cortissimo da poco più di un minuto. Verstappen parte in prima fila davanti al suo pubblico arancione, ma al semaforo la sua Red Bull si pianta — anti-stallo, frizione che slitta — e in tre curve precipita a metà gruppo. Davanti scappa la Ferrari di Leclerc. Per il muretto Red Bull la gara sembra compromessa: rimontare al Red Bull Ring si può, ma serve un'arma. L'arma scelta è il tempo: se non puoi essere davanti ora, costruisci le condizioni per essere <b>più veloce di tutti alla fine</b>.",
 "<span class='kicker'>Pagina 2 · La cronaca</span><br>Mentre Leclerc e gli altri big si fermano nella finestra 'normale', Verstappen <b>allunga</b>: resta fuori molti giri in più, perdendo tempo sulla carta ma accumulando un tesoro — al momento della sua sosta monta gomme dure con una decina di giri di freschezza in più rispetto a chiunque lo preceda. Il finale è una sentenza a rate: passa Vettel, passa Bottas, passa Hamilton, e a due giri dal termine arriva su Leclerc. Il duello è ruvido, ruota contro ruota alla curva 3, con un contatto che i commissari analizzeranno per ore prima di confermare il risultato: vittoria Verstappen. La rimonta era stata scritta trenta giri prima, in quella decisione controintuitiva di NON fermarsi quando si fermavano tutti.",
 "<span class='kicker'>Pagina 3 · L'analisi del muretto</span><br>Questo è l'<b>offset differito</b> (o overcut esteso): accettare di perdere tempo a metà gara per avere il delta gomme quando serve davvero. Funziona quando: <b>(1)</b> hai aria libera per allungare senza traffico — partire male, paradossalmente, aiuta; <b>(2)</b> il degrado in gara premia la freschezza nel finale (caldo, mescole stressate); <b>(3)</b> in pista si può sorpassare, perché tutta la tua freschezza non vale nulla a Monaco. La parte difficile è psicologica: mentre allunghi, la classifica 'virtuale' ti dice che stai perdendo. Il muretto deve guardare un altro numero: l'età relativa delle gomme al giro finale. Nel gioco: dopo una partenza compromessa, resisti alla tentazione di copiare le soste altrui — allunga, gestisci, e spendi tutto negli ultimi 15 giri."]},

{t:"Il giro di troppo", y:"Gran Bretagna 2020", fx:"tyre-cliff",
 ev:"All'ultimo giro l'anteriore sinistra di Hamilton esplose dopo uno stint lunghissimo: vinse su tre ruote per un soffio, mentre altre gomme stressate allo stesso modo erano già cedute.",
 ins:"Oltre il limite la gomma non rallenta soltanto: cede di colpo. Il 'cliff' è un precipizio, non una discesa. Non pianificare stint che finiscono al 100% dell'usura.",
 q:"Mancano 6 giri, gomme all'88%, sei P3 con 25s sul quarto: cosa fai?",
 o:["Resto fuori e incrocio le dita","Box: perdo 21s ma resto P3 in totale sicurezza","Spingo, tanto ormai è fatta"], a:1,
 ex:"Hai più margine della pit loss: la sosta blinda il podio, restare fuori rischia lo zero assoluto.",
 pages:[
 "<span class='kicker'>Pagina 1 · Il contesto</span><br>Silverstone, agosto 2020, la stagione compressa del Covid. Le Mercedes dominano e impostano una gara a una sola sosta: stint finale lunghissimo su gomma dura, oltre trenta giri sui curvoni più violenti del calendario — Copse, Maggotts, Becketts — dove le anteriori sinistre lavorano a carichi mostruosi. È la ricetta perfetta per scoprire dove sta il limite strutturale di uno pneumatico: non il limite di prestazione (la gomma che rallenta), ma quello <b>fisico</b> — il momento in cui la carcassa, stanca, smette di tenere insieme il tutto.",
 "<span class='kicker'>Pagina 2 · La cronaca</span><br>A due giri dal termine, l'anteriore sinistra di Bottas — secondo — <b>esplode</b> senza preavviso. Mentre il muretto Mercedes elabora, anche la gomma di Sainz cede. Hamilton guida con margine enorme, e arriva la domanda da incubo: fermarlo (perdendo la vittoria non c'è rischio, ma c'è Verstappen dietro) o lasciarlo fuori? Resta fuori. E all'<b>ultimo giro</b> la sua anteriore sinistra esplode a sua volta: mezza Inghilterra smette di respirare mentre Hamilton trascina la macchina su tre ruote per metà pista, con Verstappen che recupera trenta secondi in un giro… ma che si era appena fermato per montare gomme nuove e tentare il giro veloce. Hamilton vince per una manciata di secondi, con il battistrada arrotolato attorno al cerchio.",
 "<span class='kicker'>Pagina 3 · L'analisi del muretto</span><br>Il concetto chiave è che il degrado ha <b>due regimi</b>: prima il declino lineare (qualche decimo al giro, gestibile), poi il <b>cliff</b> — un precipizio dove la prestazione crolla e il rischio cedimento diventa concreto. Il problema è che il cliff non manda inviti: la telemetria mostra vibrazioni e perdita di pressione solo quando è quasi tardi. Regole del muretto: <b>(1)</b> pianifica gli stint per finire al massimo all'85-90% della vita stimata, mai al 100%; <b>(2)</b> quando il margine sulla pit loss esiste (hai 25s sul rivale e la sosta ne costa 21), la sosta di sicurezza è matematicamente gratis: rifiutarla è puro azzardo; <b>(3)</b> nota la beffa di Verstappen — si fermò per il giro veloce e perse la vittoria che gli stava cadendo in grembo: anche le soste 'di lusso' vanno pesate. Nel gioco: oltre l'85% di usura ogni giro è una roulette — la barra rossa non è un suggerimento."]},

{t:"Il microclima delle Ardenne", y:"Belgio 2021", fx:"rain-commit",
 ev:"Pioggia così intensa e persistente che la 'gara' furono pochi giri dietro la safety car e punti dimezzati: nelle Ardenne può diluviare in un settore mentre nell'altro c'è il sole.",
 ins:"A Spa anticipa: quando arriva il diluvio vero serve la full wet (non l'intermedia), e chi si ferma per primo guadagna spesso più di dieci secondi su chi aspetta.",
 q:"Prime gocce alla Source ma sole a Stavelot, radar incerto: cosa fai?",
 o:["Ignoro tutto: metà pista è asciutta","Mi tengo pronto al pit e leggo i tempi settore per settore","Monto subito le full wet"], a:1,
 ex:"A Spa la pioggia parziale è la norma: pronti a scattare, ma si cambia quando i tempi (non le sensazioni) lo dicono.",
 pages:[
 "<span class='kicker'>Pagina 1 · Il contesto</span><br>Spa-Francorchamps è il circuito più lungo del calendario: sette chilometri di saliscendi nella foresta delle Ardenne, con un dislivello di oltre cento metri tra il punto più basso e il più alto. Questa geografia produce il fenomeno che ogni stratega impara a temere: il <b>microclima</b>. Le perturbazioni atlantiche si impigliano tra le colline e capita regolarmente che diluvi a Les Combes mentre alla Source c'è asfalto asciutto — sulla stessa pista, nello stesso giro. I radar meteo, tarati su scale più ampie, qui sbagliano spesso: la vera telemetria sono i tempi nei settori e gli occhi dei piloti.",
 "<span class='kicker'>Pagina 2 · La cronaca</span><br>Agosto 2021: piove dal venerdì, e la domenica il cielo non concede nulla. Visibilità nulla nella nebbia di scia — a Spa, con l'Eau Rouge cieca in salita, è il peggior incubo di sicurezza. La direzione gara prova, aspetta, fa schierare le macchine, sospende; le ore passano, il pubblico fradicio aspetta sotto un diluvio che non molla. Alla fine, per assegnare un risultato, le vetture percorrono <b>pochi giri dietro la safety car</b>: mai una bandiera verde, non un solo sorpasso possibile. Classifica congelata sulla qualifica — con la sorpresa Russell secondo su Williams — e punteggio dimezzato. È la 'gara' più corta della storia, e il dibattito sulle regole dei punti che ne seguì cambiò il regolamento.",
 "<span class='kicker'>Pagina 3 · L'analisi del muretto</span><br>Spa insegna a operare nell'<b>incertezza meteo strutturale</b>. Strumenti pratici: <b>(1)</b> i tempi per settore valgono più del radar — se il settore 2 rallenta di tre secondi per tutti, lì sta piovendo, punto; <b>(2)</b> il delta tra intermedia e full wet si ribalta rapidamente: con pioggia vera l'inter aquaplana e la wet guadagna anche 4-5 secondi al giro, quindi al diluvio si risponde con la wet senza fare gli eroi; <b>(3)</b> la pioggia parziale crea i 'giri ibridi' dove nessuna gomma è giusta: lì vince chi anticipa la tendenza (in peggioramento → wet presto; in miglioramento → inter presto). E una lezione di umiltà: a volte la natura vince, e portare a casa i punti disponibili È la strategia. Nel gioco: a Spa la probabilità pioggia è la più alta del calendario — tieni sempre un piano bagnato pronto, anche col sole."]},

{t:"Gomma fresca vs posizione", y:"Ungheria 2019", fx:"offset",
 ev:"La Mercedes richiamò Hamilton per una seconda sosta a 20 giri dal termine, lasciandolo a quasi 20 secondi da Verstappen: con medie nuove lo riprese e lo passò a tre giri dalla fine.",
 ins:"La sosta extra paga solo se: ritmo molto superiore, giri sufficienti, distacco recuperabile (~1s/giro di delta). Fai la matematica PRIMA di chiamarla.",
 q:"P2, gomme stanche, 20 giri al termine, 18s dal leader. La gomma nuova vale 1.2s/giro: box?",
 o:["No, il podio è già in tasca","Sì: pago 21s di sosta ma recupero 1.2×20 = 24s","Sì, ma monto la dura per sicurezza"], a:1,
 ex:"Il conto torna per un soffio: 24s recuperabili contro ~21 di sosta. È il rischio calcolato dei campioni.",
 pages:[
 "<span class='kicker'>Pagina 1 · Il contesto</span><br>Hungaroring, agosto 2019. Verstappen conquista la prima pole della carriera su una pista che è una Monaco senza muri: stretta, tortuosa, dove il sorpasso richiede un secondo e mezzo di passo in più. Hamilton lo bracca per tutta la gara ma ogni attacco si infrange: a parità di gomma, il DRS non basta. La situazione a venti giri dal termine è cristallizzata — Verstappen davanti con gomme che invecchiano, Hamilton dietro con gomme nella stessa condizione. Sulla carta finisce così. A meno di non avere il coraggio di <b>perdere</b> la posizione per riprenderla: la seconda sosta che nessuno si aspetta.",
 "<span class='kicker'>Pagina 2 · La cronaca</span><br>Il muretto Mercedes fa il conto e chiama Hamilton: box, gomme medie nuove, rientro a circa <b>venti secondi</b> da Verstappen. Via radio Lewis è scettico — sembra una resa. Ma i numeri dicono altro: con un delta di oltre un secondo al giro e venti giri a disposizione, il recupero è possibile, stretto ma possibile. Inizia la caccia: giro veloce dopo giro veloce, il distacco scende con regolarità impietosa mentre la Red Bull, che non ha più una sosta di risposta (rientrerebbe dietro), può solo guardare i numeri sul monitor. A tre giri dal termine Hamilton arriva, attacca e passa una Red Bull con gomme ormai finite. La Red Bull si ferma all'ultimo per il giro veloce: il podio è salvo, la vittoria no.",
 "<span class='kicker'>Pagina 3 · L'analisi del muretto</span><br>Questa è l'equazione completa della <b>sosta d'attacco</b>: si fa quando (delta passo × giri rimanenti) supera (pit loss + distacco da recuperare + margine per il sorpasso). Nel caso reale: ~1.2s × 20 giri = 24s contro ~21s di costo — un margine di tre secondi, sottilissimo, da professionisti. Le condizioni nascoste: <b>(1)</b> serve aria pulita — un solo doppiato lento può mangiarsi il margine; <b>(2)</b> il rivale non deve avere una contromossa: se può fermarsi anche lui e restare davanti, l'attacco è sterile; qui Verstappen era 'congelato' perché la sua sosta l'avrebbe fatto rientrare dietro; <b>(3)</b> serve un pilota che faccia 20 giri da qualifica. Nel gioco: quando sei secondo con gomme stanche e tanti giri davanti, calcola il delta — se la matematica torna anche di poco, la sosta d'attacco è la mossa dei campioni."]},

{t:"Il giro 1 che vale oro", y:"Olanda 2023", fx:"rain-commit",
 ev:"Pioggia improvvisa al primo giro: chi tuffò subito la macchina ai box per le intermedie guadagnò una valanga di posizioni; chi aspettò 'un giro per capire' la pagò carissima.",
 ins:"Quando la pioggia arriva forte e all'improvviso, ogni giro di esitazione su slick costa 10-15 secondi: il coraggio immediato batte la conferma prudente.",
 q:"Goccioloni improvvisi al giro 2, perdi aderenza ovunque: cosa fai?",
 o:["Un giro di valutazione per capire","Box immediato per le intermedie","Aspetto di vedere cosa fanno i leader"], a:1,
 ex:"Se l'acqua è già tanta, ogni giro su slick è un'eternità — e un invito al testacoda.",
 pages:[
 "<span class='kicker'>Pagina 1 · Il contesto</span><br>Zandvoort, agosto 2023. Il circuito tra le dune del Mare del Nord vive di vento e di rovesci che arrivano dall'acqua con un preavviso di minuti, non di ore. Verstappen corre in casa davanti a un'orange army oceanica, a caccia del record di vittorie consecutive. Al via il cielo regge — ma sul radar c'è una cella in avvicinamento dalla costa. La domanda non è se arriverà, ma quando e quanto forte: ed è la situazione che separa i muretti coraggiosi da quelli prudenti, perché la pioggia al primo giro è il momento in cui l'informazione è minima e il valore della decisione è massimo.",
 "<span class='kicker'>Pagina 2 · La cronaca</span><br>La cella arriva <b>subito</b>, nel corso del primo giro: gocce, poi acqua vera. Pérez e pochi altri si tuffano immediatamente ai box per le intermedie — una scelta che sembra panico e invece è lucidità. Chi resta fuori 'per capire', incluso Verstappen per un giro di troppo, scopre che su slick si perdono dieci, quindici secondi a giro, pattinando come su ghiaccio. In due tornate la classifica è irriconoscibile: Pérez si ritrova in testa con un margine enorme. La pista poi si asciuga, la gara si normalizza e Verstappen ricuce con una rimonta feroce; nel finale un secondo diluvio, una bandiera rossa e una ripartenza confermano la regola del giorno. Vince Verstappen, ma la lezione l'ha data chi al giro 1 non ha esitato.",
 "<span class='kicker'>Pagina 3 · L'analisi del muretto</span><br>La 'pioggia istantanea' rompe lo schema decisionale classico (osserva → conferma → agisci) perché il costo dell'osservazione è altissimo: 10-15 secondi per ogni giro su gomma sbagliata, più il rischio concreto di testacoda o incidente. Il framework corretto è <b>asimmetrico</b>: chiediti quanto perdi se sbagli in ciascuna direzione. Pit subito e la pioggia si ferma? Perdi una sosta, ~20 secondi. Resti fuori e la pioggia cresce? Perdi 30-40 secondi e rischi la gara. Quando l'acqua è già visibile sull'asfalto, l'errore 'prudente' è il più caro. Nota tattica: nei primi giri il vantaggio di fermarsi subito è amplificato — il gruppo è compatto e ogni secondo vale una posizione. Nel gioco: se piove forte nei primi giri e sei su slick, non aspettare la conferma del radar — il box immediato è quasi sempre la mossa giusta."]},

{t:"La sosta gratis", y:"Italia 2020", fx:"sc-pit",
 ev:"A Monza, Gasly si era appena fermato quando la gara venne neutralizzata e poi interrotta: la sua sosta risultò di fatto gratuita, si ritrovò davanti e firmò una vittoria storica.",
 ins:"Le neutralizzazioni riscrivono la classifica: una sosta fatta al momento giusto può valere dieci posizioni senza un solo sorpasso. Dove la pit lane costa tanto, l'occasione vale doppio.",
 q:"A Monza la pit loss è altissima (23s): quando conviene di più fermarsi?",
 o:["Sempre il prima possibile","Durante una neutralizzazione, se arriva","Sempre il più tardi possibile"], a:1,
 ex:"Con la safety car la perdita si dimezza: su una pista dove la sosta è 'costosa', il risparmio è enorme.",
 pages:[
 "<span class='kicker'>Pagina 1 · Il contesto</span><br>Monza, settembre 2020, gare a porte chiuse dell'anno pandemico. Il Tempio della Velocità ha una particolarità strategica: con i rettilei pieni percorsi a oltre 340 km/h, il tempo perso a passare dalla corsia box (limitata a 80 km/h) è tra i più alti dell'anno. Tradotto: qui le soste si pagano carissime, e una sosta scontata vale oro. Le Mercedes dominano, Hamilton è in fuga, e nessuno immagina che la gara stia per essere decisa da una catena di eventi che premierà chi si era fermato nel momento — apparentemente — più banale.",
 "<span class='kicker'>Pagina 2 · La cronaca</span><br>La catena: una vettura si ferma a bordo pista vicino all'ingresso box → safety car → la direzione <b>chiude la pit lane</b> per sicurezza. Pierre Gasly si era fermato un attimo prima della chiusura: sosta fatta in regime rallentato, quasi gratis. Hamilton invece entra ai box quando sono chiusi — penalità di 10 secondi da scontare. Poco dopo, un incidente violento (Leclerc alla Parabolica, pilota illeso) porta la <b>bandiera rossa</b>: gruppo congelato, distacchi azzerati. Alla ripartenza Gasly si ritrova nelle primissime posizioni con la gara in mano: respinge per venti giri gli assalti di Sainz e regala all'AlphaTauri e a sé stesso una vittoria che nessun algoritmo aveva previsto. Prima vittoria francese in F1 dopo decenni.",
 "<span class='kicker'>Pagina 3 · L'analisi del muretto</span><br>Monza 2020 è il manifesto del <b>valore condizionale delle soste</b>: la stessa sosta può costare 23 secondi o 5, a seconda di QUANDO la fai. Princìpi operativi: <b>(1)</b> più alta è la pit loss del circuito, più grande è lo sconto della neutralizzazione — a Monza e Singapore la SC è un buono del 50% su un prezzo già altissimo; <b>(2)</b> le regole contano quanto il cronometro: pit lane chiusa, VSC che finisce mentre sei in corsia, finestre regolamentari — il muretto che conosce il regolamento ruba secondi a quello che conosce solo la telemetria; <b>(3)</b> la fortuna esiste, ma 'fortuna' in strategia significa essersi messi nella posizione di riceverla: Gasly era lì perché il suo muretto aveva mosso presto. Nel gioco: guarda il monitor direzione gara — ogni neutralizzazione su pista a pit loss alta è un regalo con scadenza immediata."]},

{t:"L'incognita totale", y:"Madrid 2026", fx:"flex",
 ev:"Il circuito di Madrid debutta quest'anno nel calendario: zero storico, zero dati reali di degrado, simulazioni tutte da verificare. Tutti i muretti partono alla pari.",
 ins:"Senza dati storici, la flessibilità È la strategia: parti con la mescola più versatile, tieni aperte entrambe le finestre di sosta e impara osservando i primi stint dei rivali.",
 q:"Pista nuova, degrado sconosciuto: che gomma scegli al via?",
 o:["Soft: meglio attaccare subito","Media: la più versatile, mi lascia ogni opzione aperta","Dura: la scelta più prudente in assoluto"], a:1,
 ex:"La media ti permette sia di allungare sia di anticipare, a seconda di quello che scopri nei primi giri.",
 pages:[
 "<span class='kicker'>Pagina 1 · Il contesto</span><br>Madrid 2026: il Gran Premio di Spagna trasloca su un tracciato nuovo di zecca attorno al polo fieristico IFEMA — un ibrido tra sezioni cittadine e tratti veloci appositamente costruiti. Per i muretti è l'evento più raro del mestiere: una pista <b>senza storia</b>. Niente archivi di degrado, niente statistiche di safety car, niente riferimenti sui punti di sorpasso reali. Le simulazioni al simulatore e i modelli matematici dei team danno previsioni, ma ogni stratega sa che il primo weekend su una pista nuova le previsioni vengono smentite: l'asfalto fresco evolve in modo selvaggio, i cordoli sorprendono, e perfino la pit loss reale si scopre solo facendola.",
 "<span class='kicker'>Pagina 2 · La cronaca (di un debutto tipo)</span><br>Come va, storicamente, un debutto? I precedenti recenti insegnano. Asfalto nuovo significa <b>evoluzione estrema</b>: la pista può guadagnare secondi interi tra venerdì e domenica, ribaltando le gerarchie tra mescole. I muri vicini nei settori cittadini producono safety car sopra la media (le statistiche dei nuovi cittadini parlano chiaro). E il degrado stimato in simulazione viene regolarmente smentito in una direzione o nell'altra: piste 'cattive' sulla carta si rivelano gentili, e viceversa. Risultato tipico del primo anno: strategie divergenti tra i team, qualche scommessa vincente clamorosa, e classifiche più mescolate del solito. È il weekend dove l'intelligenza adattiva batte la potenza di calcolo.",
 "<span class='kicker'>Pagina 3 · L'analisi del muretto</span><br>Decidere senza dati è una disciplina precisa. <b>(1) Massimizza le opzioni:</b> la mescola media al via domina perché da lì puoi convertire in entrambe le direzioni — accorciare verso una due-soste o allungare verso la sosta singola — mentre soft e dura ti incatenano a un piano. <b>(2) Usa i rivali come esperimento:</b> venti macchine sono venti sensori; i primi dieci giri ti dicono il degrado reale meglio di mille simulazioni — guarda chi crolla e quando. <b>(3) Prepara gli alberi decisionali, non le decisioni:</b> 'se il degrado è alto faccio X al giro N, se è basso faccio Y' — la regola pronta batte l'improvvisazione. <b>(4) Rispetta l'ignoto:</b> margine extra sulla gomma, perché il cliff di una pista nuova nessuno sa dov'è. Nel gioco: a Madrid parti di media, leggi i primi stint in torre e decidi il piano al giro 10, non al giro 1."]},
);
LESSONS.push(
{t:"Tutto può succedere", y:"Azerbaigian 2021", fx:"sc-pit",
 ev:"Verstappen guidava quando una gomma esplose a 5 giri dal termine; bandiera rossa, ripartenza da fermo, e il leader del mondiale Hamilton buttò tutto in una frenata. Vinse chi era terzo.",
 ins:"Baku regala neutralizzazioni e colpi di scena: arriva nel finale con margine di gomma per una ripartenza folle, e non sacrificare punti sicuri per un azzardo.",
 q:"Conduci a Baku con 8s di margine, gomme ok, 10 giri al termine: come imposti?",
 o:["Spingo al massimo fino alla bandiera","Gestisco: conservo gomma e margine per un'eventuale ripartenza","Sosta extra per provare il giro veloce"], a:1,
 ex:"Qui le gare si decidono nelle ripartenze: presentarsi al finale con gomma viva è la vera priorità.",
 pages:[
 "<span class='kicker'>Pagina 1 · Il contesto</span><br>Baku è un mostro a due teste: un settore cittadino medievale strettissimo attorno alla città vecchia, e un rettilineo di oltre due chilometri dove si superano i 340 km/h. Questa combinazione produce la più alta densità di caos del calendario: muri che puniscono ogni sbavatura, gomme sollecitate a velocità folli, scie e DRS che rendono nessun vantaggio al sicuro. Giugno 2021: Verstappen e Hamilton si giocano il mondiale punto su punto, e la gara sembra l'occasione di Max — Red Bull dominante, Hamilton in difficoltà, vittoria a portata di mano. A Baku, però, 'a portata di mano' non significa niente.",
 "<span class='kicker'>Pagina 2 · La cronaca</span><br>Già a metà gara un cedimento di pneumatico (Stroll, contro i muri del rettilineo) aveva acceso una spia. A <b>cinque giri dal termine</b>, la conferma atroce: la posteriore sinistra di Verstappen esplode a oltre 300 km/h sul rettilineo. Il pilota è illeso, la gara viene prima neutralizzata e poi <b>interrotta</b>: ripartenza da fermo, due giri secchi di sprint per decidere tutto. Hamilton riparte secondo e ha la vittoria platealmente offerta — ma alla prima staccata un comando azionato per errore (il famoso 'magic button' che sposta la ripartizione di frenata) gli congela le ruote: dritto nella via di fuga, gara finita. Vince Pérez, che era lì, intero, con la macchina e i nervi a posto. I due contendenti al mondiale: zero punti a testa.",
 "<span class='kicker'>Pagina 3 · L'analisi del muretto</span><br>Baku 2021 condensa tre verità. <b>(1) Il rischio strutturale esiste:</b> su piste che massacrano le gomme ad altissima velocità, lo stint troppo lungo non è solo lento — è pericoloso; il margine di gomma nel finale è un'assicurazione, non un lusso. <b>(2) Le ripartenze sono gare a sé:</b> due giri da fermo con gomme fredde annullano 49 giri di gestione perfetta; chi arriva alla ripartenza con la mescola giusta e la testa fredda raccoglie ciò che gli altri seminano. <b>(3) L'aritmetica del campionato:</b> nelle gare-lotteria, il valore atteso del 'portare a casa' supera quello dell'azzardo — buttare un podio sicuro per inseguire una vittoria improbabile è il classico errore che i muretti rimpiangono a fine anno. Nel gioco: a Baku gestisci sempre un margine di gomma per il finale, e tratta ogni ripartenza come una nuova partenza."]},

{t:"La SC che arriva sempre", y:"Singapore 2008", fx:"sc-pit",
 ev:"Ad Alonso bastò essersi fermato pochi giri prima di una safety car per vincere partendo dal fondo. Anni dopo si scoprì che quell'incidente era stato pilotato (lo scandalo 'crashgate') — ma il principio strategico resta valido.",
 ins:"A Marina Bay la safety car esce in quasi ogni edizione: chi ha GIÀ fatto la sosta quando esce eredita un vantaggio enorme su chi deve ancora fermarsi.",
 q:"Marina Bay, giro 18 di 62, finestra pit appena aperta: cosa fai?",
 o:["Allungo lo stint il più possibile","Anticipo la sosta: se poi esce la SC, sono davanti a tutti","Aspetto la safety car e mi fermo solo allora"], a:1,
 ex:"Statisticamente la SC arriverà: meglio che la tua sosta sia già alle spalle quando succede.",
 pages:[
 "<span class='kicker'>Pagina 1 · Il contesto</span><br>Singapore, settembre 2008: la prima gara in notturna della storia della F1, su un cittadino lento, lunghissimo, soffocante di umidità, circondato da muri per ogni metro. All'epoca vigeva il <b>rifornimento</b>: le strategie ruotavano attorno al carburante imbarcato, e una safety car nel momento sbagliato poteva distruggere la gara di chi doveva ancora fermarsi (con la pit lane chiusa nelle prime fasi di neutralizzazione, per regolamento). Alonso, su una Renault in crisi, parte quindicesimo: una gara anonima annunciata. La sua squadra lo carica leggero di benzina e lo ferma <b>prestissimo</b>, una mossa apparentemente disperata.",
 "<span class='kicker'>Pagina 2 · La cronaca</span><br>Pochi giri dopo la sosta di Alonso, il suo compagno di squadra Piquet Jr. va a muro in un punto senza gru: <b>safety car</b>. La pit lane chiusa intrappola tutti quelli che dovevano ancora rifornire; quando riapre, il gruppo si ferma in massa e riemerge alle spalle dello spagnolo. Da quindicesimo a praticamente primo: Alonso amministra e vince. Un anno dopo emerge la verità che trasforma il capolavoro in scandalo: l'incidente era stato <b>concordato</b> a tavolino dal management del team — il 'crashgate', uno dei casi più gravi della storia dello sport, con squalifiche e dirigenti banditi. Resta, depurato dalla vergogna, il meccanismo strategico che quella truffa sfruttò: a Marina Bay chi si è già fermato quando esce la safety car vince la lotteria.",
 "<span class='kicker'>Pagina 3 · L'analisi del muretto</span><br>Marina Bay ha una delle probabilità di safety car più alte del mondiale: la quasi-certezza statistica trasforma il modo di pianificare. Il concetto chiave è la <b>posizione rispetto alla propria sosta</b>: in ogni istante della gara sei 'esposto' (devi ancora fermarti: una SC ti danneggia o aiuta i rivali) o 'coperto' (ti sei già fermato: una SC ti regala secondi). A Singapore conviene ridurre il tempo di esposizione: anticipare la sosta appena la finestra apre, accettando uno stint finale più lungo, perché il valore atteso della copertura supera il costo della gomma più vecchia. Corollario etico e tecnico: il crashgate dimostrò quanto questo meccanismo fosse potente — al punto che qualcuno arrivò a fabbricarlo. Nel gioco: a Singapore (e nei cittadini) anticipa la sosta nella finestra legale e lascia che la statistica lavori per te."]},

{t:"Anticipa e resisti", y:"Stati Uniti 2021", fx:"undercut",
 ev:"Verstappen anticipò la prima sosta in modo aggressivo per scavalcare Hamilton, poi difese per oltre venti giri con gomme più vecchie, dosando ogni decimo fino alla bandiera.",
 ins:"L'undercut ti regala la posizione ma ti lascia gomme più vecchie nel finale: dopo l'attacco viene la gestione. Vince chi sa fare entrambe le cose.",
 q:"Hai appena completato l'undercut e sei davanti, ma il rivale ha gomme 8 giri più fresche: che passo tieni?",
 o:["Spingo per scappare subito","Gestisco: mi servirà gomma viva per difendere nel finale","Mi fermo un'altra volta"], a:1,
 ex:"Il vantaggio dell'undercut si difende con la gestione, non bruciando la gomma in tre giri di gloria.",
 pages:[
 "<span class='kicker'>Pagina 1 · Il contesto</span><br>Austin, ottobre 2021. Il duello mondiale Hamilton-Verstappen entra nelle gare decisive su una pista che consuma: il COTA ha curvoni veloci ispirati a Silverstone e Suzuka, asfalto sconnesso e degrado alto. Al via Hamilton brucia Verstappen e si prende la testa: per la Red Bull si materializza lo scenario peggiore, inseguire una Mercedes con passo simile su una pista dove il sorpasso in pista costa tantissimo. Quando il sorpasso in pista non è realistico, resta il sorpasso ai box — ma l'undercut, qui, ha un prezzo nascosto che la seconda metà di gara presenterà puntualmente.",
 "<span class='kicker'>Pagina 2 · La cronaca</span><br>La Red Bull rompe gli indugi con una prima sosta <b>aggressivamente anticipata</b>: Verstappen ai box molto presto, gomme dure, giri d'uscita feroci. La Mercedes copre tardi e quando Hamilton rientra, la posizione è persa: undercut riuscito. Ma il conto arriva: avendo anticipato due volte (anche la seconda sosta è precoce per proteggere la posizione), Verstappen affronta l'ultimo stint con gomme molto più vecchie di quelle di Hamilton, che gli piomba addosso negli ultimi dieci giri recuperando secondi a vista. Il finale è una lezione di gestione sotto assedio: Max dosa trazione e batterie, usa l'aria sporca come scudo, e taglia il traguardo con poco più di un secondo di vantaggio. L'attacco aveva vinto la posizione; la gestione vinse la gara.",
 "<span class='kicker'>Pagina 3 · L'analisi del muretto</span><br>L'undercut è un <b>prestito</b>: ti dà la posizione oggi e ti presenta il conto nel finale, sotto forma di gomme più anziane. La gara di Austin mostra il pacchetto completo: <b>(1)</b> anticipare la sosta conviene quando il delta gomma nuova è alto e c'è aria libera al rientro; <b>(2)</b> ogni giro di anticipo si paga con un giro di vecchiaia in più nel momento più fragile — quindi l'entità dell'anticipo va dosata: il minimo sufficiente a scavalcare, non un giro di più; <b>(3)</b> dopo l'undercut il passo giusto è conservativo: il rivale con gomme fresche arriverà, e ti servirà gomma viva per gli ultimi cinque giri, dove la difesa si gioca in trazione. La variante simmetrica è lasciare che sia il rivale ad anticipare e tenersi la freschezza (overcut): funziona dove il traffico punisce chi rientra. Nel gioco: dopo un undercut riuscito passa subito a 'Gestisci' e tieni l'overtake per la difesa finale."]},

{t:"L'aria sottile", y:"Messico, alta quota", fx:"stops-math",
 ev:"A 2.200 metri l'aria rarefatta toglie carico aerodinamico e raffreddamento, ma riduce anche lo stress sulle gomme: il degrado reale è spesso più basso del previsto, e qui domina chi riesce a fare una sola sosta.",
 ins:"Leggi la pista, non il catalogo: dove il degrado reale è basso, la sosta risparmiata vale più della mescola più veloce.",
 q:"In gara scopri che il degrado è molto più basso del previsto: cosa fai?",
 o:["Mantengo il piano originale a 2 soste","Allungo lo stint e converto il piano a 1 sola sosta","Mi fermo comunque nella finestra prevista"], a:1,
 ex:"Una sosta risparmiata sono ~20 secondi regalati a chiunque resti aggrappato al piano vecchio.",
 pages:[
 "<span class='kicker'>Pagina 1 · Il contesto</span><br>L'Autódromo Hermanos Rodríguez di Città del Messico sorge a circa <b>2.200 metri</b> di altitudine: l'aria è più rarefatta di circa un quinto rispetto al livello del mare, e questo riscrive la fisica della monoposto. Le ali generano meno carico (si corre con configurazioni da massimo carico che si comportano come da Monza), i radiatori raffreddano peggio, i turbocompressori girano al limite, le velocità di punta esplodono. E le gomme vivono in un mondo strano: meno carico aerodinamico significa meno energia trasferita alla mescola in curva — il degrado, contro ogni intuizione, spesso <b>scende</b>. Per gli strateghi il Messico è la pista dove i modelli pre-gara sbagliano più volentieri.",
 "<span class='kicker'>Pagina 2 · La cronaca (il copione ricorrente)</span><br>Il copione si ripete edizione dopo edizione: le simulazioni del giovedì indicano una gara a due soste, il venerdì i long run seminano dubbi, e la domenica la verità — il degrado vero è più basso del previsto, e la gara si vince con una <b>sosta sola</b>, tipicamente media→dura, allungando il primo stint ben oltre la finestra teorica. Chi resta fedele al piano a due soste si ritrova a pagare venti secondi di pit loss in cambio di un vantaggio di passo che non basta mai a recuperare nel traffico, complicato dal fatto che in aria rarefatta seguire da vicino fa surriscaldare freni e motore. Le edizioni recenti raccontano la stessa storia: il podio parla la lingua della sosta singola.",
 "<span class='kicker'>Pagina 3 · L'analisi del muretto</span><br>La lezione profonda è la <b>revisione del piano coi dati di gara</b>. Metodo: nei primi 10-12 giri misura il degrado reale — quanto perdi al giro rispetto ai tuoi primi passaggi? Se la perdita è sotto la metà di quanto stimato, la conversione a una sosta in meno diventa quasi sempre dominante: il guadagno è la pit loss piena (~20s) contro un peggioramento di passo che, su degrado basso, non la ripaga. Le insidie: <b>(1)</b> convertire significa stint finale lungo — verifica che la gomma arrivi in fondo lontana dal cliff; <b>(2)</b> il sorpasso in quota è complicato dal surriscaldamento in scia: la posizione guadagnata risparmiando una sosta è particolarmente difensiva qui; <b>(3)</b> vale anche l'inverso — se il degrado reale è PEGGIO del previsto, aggiungere una sosta presto batte il trascinarsi su gomme morte. Nel gioco: in Messico controlla la tua usura ai giri 10-12 e abbi il coraggio di riscrivere il piano."]},

{t:"L'azzardo finale", y:"Brasile 2008", fx:"gamble-end",
 ev:"Pioggia negli ultimi giri a Interlagos: Glock restò su gomme da asciutto e all'ultima curva dell'ultimo giro venne superato da Hamilton, che proprio così vinse il mondiale per un punto.",
 ins:"Restare fuori col meteo in peggioramento ha un costo esponenziale: se la pioggia aumenta, perdi tutto negli ultimi due giri. Calcola cosa RISCHI, non solo cosa guadagni.",
 q:"3 giri alla fine, inizia a piovere, sei P4: ti fermi per le intermedie?",
 o:["Mai: perderei la posizione","Dipende: se la pioggia cresce sì, su pista appena umida si può tenere","Sempre e comunque, senza guardare"], a:1,
 ex:"È un calcolo: pioggia in aumento = slick ingestibili = pit obbligato. Pioviggine stabile = si può rischiare.",
 pages:[
 "<span class='kicker'>Pagina 1 · Il contesto</span><br>Interlagos, 2 novembre 2008, ultima gara dell'anno. Hamilton (McLaren) arriva con sette punti su Massa (Ferrari), che corre in casa: a Lewis basta il quinto posto, qualunque cosa faccia Felipe. Il cielo di San Paolo, come da tradizione, è un personaggio della trama: pioggia prima del via, pista che si asciuga, e una nuova perturbazione che i radar collocano proprio <b>sugli ultimi giri</b>. È lo scenario da manuale del dilemma finale: quando mancano una manciata di tornate, la sosta costa una posizione secca — ma restare fuori su gomme sbagliate può costare tutto.",
 "<span class='kicker'>Pagina 2 · La cronaca</span><br>La pioggia arriva a una decina di giri dal termine. Quasi tutti rientrano per le intermedie; la Toyota lascia fuori <b>Glock</b> su gomme slick, scommettendo che l'acqua resti leggera: la mossa lo proietta in alto in classifica. Massa vince la gara e per trenta secondi il box Ferrari festeggia il titolo: Hamilton, scivolato sesto dopo un sorpasso subito da Vettel, non sembra più in grado di riprendersi il quinto posto che vale tutto. Ma la pioggia <b>aumenta</b>, e le slick di Glock diventano improvvisamente inguidabili: nell'ultimo giro perde quasi venti secondi, e all'ultima curva utile — Juncão, salita verso il traguardo — Hamilton lo infila. Quinto posto. Campione del mondo per un punto, nel finale più crudele e celebre della storia moderna.",
 "<span class='kicker'>Pagina 3 · L'analisi del muretto</span><br>L'azzardo di Glock non fu stupido: fu una scommessa con una variabile letta male — la <b>derivata</b> della pioggia. Su pista appena umida e stabile, le slick tiepide possono sopravvivere e la posizione regalata dal non fermarsi vale oro; ma se l'intensità cresce, il degrado della guidabilità è esponenziale: si passa da 'perdo 2 secondi al giro' a 'non tengo la macchina in strada' nel giro di due tornate. Il framework: negli ultimi 5 giri valuta (a) intensità attuale, (b) tendenza, (c) quanti giri mancano. Pioggia stabile e ≤3 giri → si può tenere; pioggia in aumento → la matematica è spietata, ogni giro su slick costa più della sosta stessa. E ricorda l'altra faccia: Hamilton vinse il titolo perché il SUO muretto si era fermato — pagando posizione per guidabilità — e perché là davanti qualcuno aveva rischiato troppo. Nel gioco: col bagnato in arrivo nel finale guarda il radar e la tendenza, non l'orgoglio."]},

{t:"Gomme al freddo", y:"Las Vegas 2023", fx:"cold",
 ev:"Gara notturna su asfalto gelido: gomme fuori dalla finestra di temperatura, graining ovunque, aderenza imprevedibile. Le mescole più dure non si 'accendevano' mai.",
 ins:"Con l'asfalto freddo la gomma dura può essere più lenta E rovinarsi prima (graining): qui le mescole morbide lavorano meglio. La temperatura ribalta la gerarchia delle mescole.",
 q:"Asfalto a 12°C: quale rischio corre la gomma dura?",
 o:["Si surriscalda subito","Non entra mai in temperatura: poco grip e graining","Nessuno: è sempre la più sicura"], a:1,
 ex:"Una gomma fredda scivola, e scivolando si rovina: la scelta 'sicura' diventa la peggiore. (In questo GP la dura sarà penalizzata!)",
 pages:[
 "<span class='kicker'>Pagina 1 · Il contesto</span><br>Las Vegas, novembre 2023: la F1 torna sulla Strip con una gara in piena notte nel deserto del Nevada. Temperature dell'asfalto tra le più basse mai affrontate dalla categoria — anche sotto i 15°C — su un tracciato di lunghi rettilinei (poca energia nelle gomme) e asfalto liscio appena steso (poco grip meccanico). Il weekend parte anche peggio del previsto: nelle prime libere un tombino cede al passaggio di una monoposto, danni seri e sessione cancellata — i team arrivano alla gara con pochissimi dati. Per gli pneumatici è lo scenario inverso del solito: il problema non è il surriscaldamento, è <b>accenderli</b>.",
 "<span class='kicker'>Pagina 2 · La cronaca</span><br>In gara succede ciò che gli ingegneri temevano: le gomme faticano a entrare nella finestra di funzionamento, e una gomma fredda che scivola sviluppa <b>graining</b> — la mescola si straccia in micro-rotoli superficiali che riducono ulteriormente il grip, un circolo vizioso. La mescola dura, che richiede più energia per attivarsi, è la più colpita: lenta da nuova, lenta da vecchia. Le scelte vincenti vanno controcorrente rispetto a una gara 'normale': mescole più morbide del previsto, gestione dei primi giri dopo ogni sosta delicatissima (gomme nuove e fredde = ghiaccio), ripartenze dalla safety car trasformate in pattinaggio. La gara, tra sorpassi favoriti dai rettilinei e neutralizzazioni, risulta a sorpresa spettacolare — e vinta da chi ha tenuto le gomme nella finestra giusta più a lungo.",
 "<span class='kicker'>Pagina 3 · L'analisi del muretto</span><br>Ogni mescola ha una <b>finestra termica</b>: sotto, non genera aderenza chimica e si danneggia per scorrimento (graining); sopra, surriscalda e si degrada per blistering. L'asfalto freddo sposta tutto verso il basso e <b>ribalta la gerarchia</b>: la soft, che si attiva facilmente, diventa contemporaneamente la più veloce e — controintuitivamente — spesso la più durevole, perché lavora nella sua finestra invece di strapparsi scivolando. Conseguenze operative: <b>(1)</b> al freddo, sconta di un livello la durezza del piano (dove faresti M-H, valuta S-M); <b>(2)</b> i giri dopo la sosta sono i più pericolosi dell'intera gara: gomme nuove E fredde — concedi un margine prima di attaccare o difendere al limite; <b>(3)</b> le ripartenze in queste condizioni sono trappole per chi sta dietro e occasioni per chi le anticipa mentalmente. Nel gioco: a Las Vegas la dura è penalizzata — costruisci la strategia su soft e media e attento ai giri post-pit."]},

{t:"Lo stint contingentato", y:"Qatar 2023", fx:"tyre-cliff",
 ev:"I cordoli di Lusail danneggiavano i fianchi delle gomme: per sicurezza venne imposto un limite massimo di 18 giri per ogni treno, obbligando tutti ad almeno tre soste.",
 ins:"Quando esiste un limite di stint, la strategia diventa un puzzle di finestre: pianifica TUTTE le soste dall'inizio e non sprecare un solo giro di gomma. In questo GP avrai un limite di 20 giri per treno di slick!",
 q:"Limite 20 giri per treno su una gara di 57: quante soste minime servono?",
 o:["Una","Due (tre stint da ~19 giri)","Quattro"], a:1,
 ex:"57 ÷ 20 = servono almeno 3 stint, quindi 2 soste minime: ogni giro va pianificato in anticipo.",
 pages:[
 "<span class='kicker'>Pagina 1 · Il contesto</span><br>Lusail, ottobre 2023. Dopo le prove libere, i tecnici Pirelli ispezionano gli pneumatici usati e trovano qualcosa che non va: <b>microlesioni nei fianchi</b>, causate dai cordoli 'a piramide' del tracciato qatariota, aggrediti giro dopo giro alle altissime velocità di percorrenza. Il rischio è il cedimento strutturale improvviso — l'incubo di ogni ente sportivo. La soluzione, senza precedenti nella forma: un <b>limite regolamentare di 18 giri</b> per ogni treno di gomme in gara, deciso d'ufficio per sicurezza. In una notte, i piani strategici di tutti i team finiscono nel cestino: la gara diventa un problema di matematica vincolata.",
 "<span class='kicker'>Pagina 2 · La cronaca</span><br>Con 57 giri da coprire e treni da massimo 18, la gara impone almeno tre soste a tutti: scompare la gestione 'allungo se serve', compare la pianificazione a tavolino — quali mescole, in che ordine, con finestre che devono incastrarsi anche con eventuali safety car. Ma il vincolo gomme non è l'unico nemico: il caldo umido del Golfo, in una gara serale corsa a ritmo da sprint perpetua (tanto la gomma 'scade' comunque), porta i piloti al limite fisico — c'è chi si sente male nell'abitacolo, chi vomita nel casco, chi si ritira per malessere. Verstappen, che aveva già blindato il titolo il giorno prima nella sprint, domina una gara che i piloti ricorderanno come una delle più dure di sempre.",
 "<span class='kicker'>Pagina 3 · L'analisi del muretto</span><br>Il vincolo di stint trasforma la strategia da ottimizzazione continua a <b>puzzle combinatorio</b>: dato N giri e un tetto per treno, il numero minimo di soste è fissato (⌈N/limite⌉−1) e ogni giro 'sprecato' — fermarsi al giro 14 con un treno da 18 — è capacità buttata che dovrai recuperare accorciando altri stint. Princìpi: <b>(1)</b> disegna le finestre a ritroso dalla bandiera a scacchi, lasciando 1-2 giri di cuscinetto per ogni stint contro safety car e imprevisti; <b>(2)</b> con il ritmo 'tanto la gomma scade', la gestione classica perde valore: si spinge di più, e contano freni, motore e fisico; <b>(3)</b> la safety car cambia il calcolo — fermarsi in SC dentro una finestra valida è doppio guadagno. La lezione generale vale ovunque: ogni gara ha vincoli (mescole obbligatorie, finestre regolamentari) e il muretto bravo li trasforma in vantaggio. Nel gioco: a Lusail hai il limite di 20 giri per treno slick — pianifica le 2-3 soste PRIMA del via e rispetta le finestre."]},

{t:"La sosta dell'ultima chance", y:"Abu Dhabi 2021", fx:"sc-late",
 ev:"Safety car a pochi giri dal termine: Verstappen si fermò per soft nuove, Hamilton restò fuori su dure vecchie per difendere la posizione. Alla ripartenza — gestita in modo molto controverso — la gomma fresca decise gara e mondiale all'ultimo giro.",
 ins:"Con una safety car nel finale la sosta è quasi gratuita: gomma nuova alla ripartenza batte quasi sempre la posizione difesa con gomma morta. E se il leader sei tu, copri la mossa fermandoti anche tu.",
 q:"SC al giro 53 di 58, sei P2 con gomme vecchie e il leader resta fuori: cosa fai?",
 o:["Resto fuori anche io, per coerenza","Box per le soft: alla ripartenza avrò un'arma enorme","Box per le dure, meglio non rischiare"], a:1,
 ex:"In SC perdi pochissimo e riparti incollato con gomma nuova contro gomma morta: è la mossa che ha deciso un mondiale.",
 pages:[
 "<span class='kicker'>Pagina 1 · Il contesto</span><br>Yas Marina, 12 dicembre 2021. Hamilton e Verstappen arrivano all'ultima gara <b>a pari punti</b> — non accadeva da decenni: chi finisce davanti è campione del mondo. La gara sembra scritta presto: Hamilton scatta meglio, costruisce un vantaggio solido e lo amministra su gomme dure; la Red Bull prova tutto, incluso uno stint allungato e l'uso strategico del compagno di squadra, ma a dieci giri dal termine il distacco è di una decina di secondi. Il muretto Mercedes ha la gara in pugno e una sola cosa può riaprirla: una neutralizzazione. Al giro 53 di 58, Latifi va a muro. <b>Safety car.</b>",
 "<span class='kicker'>Pagina 2 · La cronaca</span><br>I due muretti scelgono in tre secondi le strade opposte. Red Bull: box, gomme <b>soft nuove</b> — Verstappen non ha nulla da perdere, in SC la sosta costa poco. Mercedes: Hamilton <b>resta fuori</b> — fermarsi significherebbe cedere la posizione in pista, e se la gara finisse in regime di safety car (scenario realistico), la posizione È il titolo. Segue la sequenza che verrà analizzata per anni: la direzione gara prima comunica che le vetture doppiate non potranno sdoppiarsi, poi fa sfilare <b>solo</b> le cinque che separano i due contendenti, e fa ripartire la gara per un singolo giro finale. Verstappen, con soft nuove contro dure di quaranta giri, attacca alla prima occasione e passa: campione del mondo all'ultimo giro dell'ultima gara. I ricorsi Mercedes vengono respinti; mesi dopo, la FIA riconoscerà errori nella gestione della procedura e riorganizzerà la direzione gara.",
 "<span class='kicker'>Pagina 3 · L'analisi del muretto</span><br>Al netto delle polemiche — sacrosante e documentate — la situazione strategica pura è il caso di studio definitivo sulla <b>SC tardiva</b>. La teoria: con una neutralizzazione negli ultimi giri, (a) la sosta costa pochissimo, (b) i distacchi si azzerano, (c) il delta tra gomma nuova e gomma vecchia alla ripartenza è enorme e non c'è tempo perché si riequilibri. Chi insegue deve fermarsi <b>sempre</b>: rischia poco e guadagna un'arma. Chi guida ha un dilemma reale ma sbilanciato: restare fuori vince solo se la gara NON riparte; in ogni scenario di ripartenza, la gomma fresca domina. La copertura ideale del leader è fermarsi anche lui (mantenendo la posizione se il distacco supera la pit loss in SC) — Hamilton non poteva, perché Verstappen era troppo vicino: ecco perché la Red Bull aveva tenuto il distacco sotto quella soglia. Nel gioco: ad Abu Dhabi la SC tardiva è probabile — chiunque tu sia in classifica, quando esce negli ultimi giri la risposta è quasi sempre: box, soft, e giocarsela alla ripartenza."]},
);
const LESSONS_EN = [
{t:"Endless restarts", y:"Australia 2023", fx:"sc-pit",
 ev:"Three red flags and late standing restarts: whoever reached them with the right tyres and a cool head gained positions by the handful; others threw their race away in one corner.",
 ins:"Neutralisations erase gaps and hand out near-free tyre changes: always keep a compound ready for the restart, and don't bet everything on the first lap after it.",
 q:"Safety car with 6 laps to go, your tyres are old: what do you do?",
 o:["Stay out to protect position","Box: the pack is bunched, the stop costs very little","Push flat out behind the safety car"], a:1,
 ex:"With the field slowed and bunched, the stop costs about half: you restart glued to the pack with an extra weapon.",
 pages:[
 "<span class='kicker'>Page 1 · Context</span><br>Melbourne, April 2023, round three of the championship. Albert Park is a semi-street circuit around a lake: close walls, little run-off, and a long history of safety cars. Red Bull dominate the weekend, but race control rewrites the script: modern F1 increasingly prefers the <b>red flag</b> to the safety car late in races, so they don't finish under neutralisation in front of the crowd. Every red flag means something huge for strategists: race suspended, gaps erased, a <b>free tyre change</b> on the grid and a standing restart. In effect, a second race start with everything to play for — and that day there were three of them.",
 "<span class='kicker'>Page 2 · The race</span><br>The first stoppage comes early, after an incident in the opening phase. The race resumes, settles down, and seems headed for a normal finish — until a crash with a handful of laps left forces a second red flag. Standing restart with two laps to run: effectively a one-corner sprint race. In the chaos of that start, cars collide everywhere: gravel traps full, debris across the track, the classification turned upside down. Third red flag. Race control has the cars file round under neutralisation and restores the order from before the chaos: those who had lost everything got most of it back, those who had gambled and gained were denied. The winner was whoever stayed calm and out of trouble.",
 "<span class='kicker'>Page 3 · Pit-wall analysis</span><br>Three concrete lessons. <b>First:</b> every neutralisation is a reset — seconds of margin built over 50 laps vanish, so a lead must be defended with tyre life in hand, not just with the stopwatch. <b>Second:</b> the red-flag tyre change is the only truly free one in F1: refusing it is almost always a mistake. <b>Third:</b> restarts carry asymmetric risk — on the first lap you can gain one position or lose ten in the gravel. In the game: when you see a red flag, always pick the best compound for the laps remaining (softs if few), and remember at restarts that position is also defended by not overdoing it."]},

{t:"The dying tyre", y:"China 2007", fx:"tyre-cliff",
 ev:"Hamilton, fighting for his first title as a rookie, stayed out on destroyed intermediates while the track dried: he slid into the gravel at the pit-lane entry.",
 ins:"When the tyre is finished, every extra lap costs seconds and multiplies the risk of a mistake: a late stop is almost always worse than an early one.",
 q:"The track is drying, your inters are worn and you're losing 2s a lap: what do you do?",
 o:["Wait for a perfectly dry track","Box now for slicks: the break-even point has already passed","Push harder to compensate"], a:1,
 ex:"If you're already losing 2s a lap, every lap of waiting is time gifted to your rivals — and on a dead tyre, the mistake is around the corner.",
 pages:[
 "<span class='kicker'>Page 1 · Context</span><br>Shanghai, October 2007, the penultimate race of the season. Lewis Hamilton is a rookie doing the unthinkable: leading the championship comfortably over his team-mate Alonso and over Raikkonen, needing only to manage. The race starts on a wet track, everyone on intermediates. The McLaren leads and controls. But the Chinese weather does what it always does: the rain stops, the asphalt begins to dry, and on a drying track intermediates <b>eat themselves alive</b> — the soft wet-weather tread overheats and wears away visibly. It's the moment every pit wall must call: when do you switch to slicks?",
 "<span class='kicker'>Page 2 · The race</span><br>McLaren stalls. Maybe waiting for another shower, maybe covering rivals, maybe simply hesitating. Meanwhile the TV cameras zoom in on Hamilton's tyres: the rubber is so far gone that the <b>white canvas</b> shows through the tread. The driver is losing seconds per lap, sliding everywhere, asking questions on the radio. When the call to box finally comes, it's too late: in the slow little pit-entry road, on tyres with no grip left, Hamilton loses the front and beaches the car in the tiny gravel run-off. The car is intact, the engine running, but there's no way out. His first retirement of the season, zero points. Raikkonen wins — and a week later, in Brazil, takes the title from him by a single point.",
 "<span class='kicker'>Page 3 · Pit-wall analysis</span><br>China 2007 is the textbook on <b>crossing the break-even point</b>. The maths is cold: if the stop costs ~22 seconds and a finished tyre loses you 2-3 seconds a lap, after 8-10 laps of hesitation you've already paid for the stop… without making it. And there's the hidden cost, the one that decided a championship: on a dead tyre the probability of error explodes — lock-ups, wide lines, gravel. The operating rule: when your gap to your reference grows for two consecutive laps and the tyre is past 80%, the debate is over — box. In the game: watch the wear bar and the lap times; if the track is drying and you're on inters, the crossover to slicks should be anticipated, never chased."]},

{t:"Deluge and crossover", y:"Japan 2022", fx:"rain-commit",
 ev:"Suzuka started under a deluge and was suspended for hours: at the resumption, nailing the lap to switch from full wets to inters was worth entire podiums.",
 ins:"Between full wet and intermediate there are 2-3 seconds per lap: watch the times of those who already switched and, if the data is clear, copy immediately.",
 q:"Rain easing: a rival fits inters and goes 2s a lap faster than you. What do you do?",
 o:["Wait 5 more laps to be sure","Box next lap: the data is already clear","Stay on full wets until the track is dry"], a:1,
 ex:"One confirmation lap is enough. Every extra lap on the wrong tyre is time lost forever.",
 pages:[
 "<span class='kicker'>Page 1 · Context</span><br>Suzuka, October 2022. Verstappen can clinch his second title at Honda's temple, but a serious weather front looms over Japan. A wet Suzuka is one of the hardest tests on the calendar: fast loaded corners, ageing drainage, zero visibility in the spray. Here the distinction between the two wet tyres becomes vital: the <b>full wet</b> clears enormous amounts of water but is slow on a merely damp track; the <b>intermediate</b> is 2-3 seconds a lap quicker but aquaplanes in standing water. The window in which it pays to switch from one to the other — the <b>crossover</b> — lasts a few laps, and whoever reads it best wins.",
 "<span class='kicker'>Page 2 · The race</span><br>The start happens in pouring rain: nightmare visibility, an almost immediate incident and a red flag after just a few laps. A very long suspension follows, over two hours, with the water still falling. When race control restarts behind the safety car, everyone is mandated onto full wets — but the rain is fading. Within a few laps the track comes into the intermediate window: the first to dare the switch immediately gain seconds in every sector, and anyone who delays even two or three laps gets jumped wholesale. Verstappen dominates and — amid points-calculation confusion on a shortened race that baffles even the teams — is crowned world champion that very afternoon.",
 "<span class='kicker'>Page 3 · Pit-wall analysis</span><br>You don't guess the crossover: you <b>measure</b> it. The pit-wall method is to use other cars as sensors — the moment someone fits inters, their sector times tell the truth instantly. If their first sector is over a second faster than yours, the data is already sufficient: you need ONE confirmation lap, not five. The maths of urgency: at 2.5s/lap of difference, five extra laps of caution cost 12 seconds — more than half a pit stop. The reverse applies too, inter to wet as the water builds: there the cost of waiting isn't just time, it's aquaplaning risk. In the game: watch the tyre symbols in the tower — when rivals on a different compound start gaining consistently, you already have your answer."]},

{t:"The undercut", y:"Bahrain 2021", fx:"undercut",
 ev:"Mercedes brought Hamilton in early: his out-laps on fresh rubber were so fast that when Verstappen stopped, he came out behind. That position decided the race.",
 ins:"Stopping before your rival (the undercut) works when fresh rubber is worth 1.5-2s a lap: on abrasive asphalt like Sakhir it's the primary strategic weapon.",
 q:"You're 1.5s behind the car ahead, similar tyres, pit loss 21s: how do you pass him?",
 o:["Wait for his mistake on track","Stop first and exploit the laps on new rubber","Stop one lap after him"], a:1,
 ex:"On new rubber you gain 1.5-2s a lap: 2-3 laps of advantage are enough to jump him when he stops.",
 pages:[
 "<span class='kicker'>Page 1 · Context</span><br>Sakhir, March 2021, the opening race of a season that would become legendary. For the first time in years, Verstappen's Red Bull is genuinely faster than Hamilton's Mercedes: a clear pole and superior race pace. On paper, the Mercedes pit wall has no way to win on track. But Bahrain has a precious characteristic for the chaser: an <b>extremely abrasive</b> surface, rough as sandpaper, which amplifies the difference between new and used rubber. It's the perfect habitat for the <b>undercut</b>: stopping BEFORE your rival to exploit laps on fresh rubber while he struggles on the old set.",
 "<span class='kicker'>Page 2 · The race</span><br>Verstappen leads by a few seconds when Mercedes strikes early: Hamilton boxes well before the expected window. His first laps on fresh tyres are devastating — over a second and a half a lap quicker than the leader. Red Bull, unwilling to be left with overlong final stints, cannot respond immediately: when Verstappen stops, he emerges <b>behind</b>. The strategic overtake is complete without a single move on track. Late in the race Verstappen, on fresher rubber, hunts Hamilton down and even passes him — but beyond track limits at turn 4: he has to give the place back. Hamilton wins, defending on tyres measured to the last millimetre, and the duel of the year is up and running.",
 "<span class='kicker'>Page 3 · Pit-wall analysis</span><br>The undercut needs three ingredients, all measurable. <b>One:</b> a high tyre delta — on abrasive surfaces fresh rubber is worth 1.5-2s/lap; on smooth ones, sometimes half a second, and the undercut dies. <b>Two:</b> clear air on the out-lap — rejoin behind a train and the magic laps evaporate in traffic. <b>Three:</b> stint sustainability — stopping early lengthens the next stint: you must have the rubber to reach the end (the sum that hampered Verstappen's defence). The hidden price: the undercutter finishes the race on older tyres and is vulnerable at the end. In the game: if you're within 2-3 seconds of the car ahead, bring your stop forward 2-3 laps from plan and push hard on the out-lap."]},

{t:"Walls and roulette", y:"Saudi Arabia 2021", fx:"sc-pit",
 ev:"Red flags, safety cars and restarts on the limit between Jeddah's walls: the world's fastest street circuit turned strategy into a roulette of neutralisations.",
 ins:"On fast street circuits the safety car is not a hypothesis: it's a statistical certainty. Plan your stops around WHEN it comes out, not IF.",
 q:"Lap 15 of 50, tyres at 50%, the safety car comes out: what do you do?",
 o:["Stay out, it's too early","Box: the stop costs half, it's a gift","Fit softs and attack immediately"], a:1,
 ex:"Under the SC the field slows and the stop costs roughly half: it often pays even when it feels early.",
 pages:[
 "<span class='kicker'>Page 1 · Context</span><br>Jeddah, December 2021, the penultimate act of the Hamilton-Verstappen duel: they arrive closer than at any point in recent history. The stage is brand new and crazy: the fastest street circuit ever built, permanent-track average speeds but <b>walls centimetres</b> from the racing line, blind corners in sequence, zero margin for error. For a strategist, a layout like this has one reading: the probability of a full race without neutralisations is tiny. Every plan written before the start is a draft: the real one will be written between safety cars, virtual safety cars and red flags.",
 "<span class='kicker'>Page 2 · The race</span><br>And so it goes: a crash brings the safety car, Hamilton and Mercedes stay out, Red Bull doesn't — then comes the <b>red flag</b>, gifting a free tyre change to those who hadn't stopped and flipping the whole equation. Chaotic restarts follow, contacts, another stoppage, and live negotiations between teams and race control over restart orders never seen before. Amid sparks, off-track passes and a collision between the two title contenders, Hamilton wins and draws level on points. More than a race, a lesson in strategic survival: every neutralisation reshuffled the deck.",
 "<span class='kicker'>Page 3 · Pit-wall analysis</span><br>On street circuits the pit wall thinks <b>probabilistically</b>: with a high per-lap safety-car probability, across 50 laps the neutralisation event is near-certain. Practical consequences: <b>(1)</b> a stop under SC costs about half (the pack trundles while you're in the pits) — a 50% discount that comes along once; <b>(2)</b> it pays to keep your pit window 'open' as long as possible, so when the SC appears you have the flexibility to cash it in; <b>(3)</b> after every stoppage your built-up advantage is erased: never spend all your tyre building margins a neutralisation will cancel. In the game: at Jeddah, Baku, Singapore and Melbourne watch the race control monitor and treat every SC as a discount voucher with an immediate expiry."]},

{t:"The counter-strategy", y:"Miami 2023", fx:"offset",
 ev:"Verstappen started ninth on the hard tyre, stretched his first stint enormously and finished the race on fresh mediums, devouring those who had done the opposite — and winning.",
 ins:"When you start behind, copying your rivals' strategy keeps you behind: inverting the compound order gives you fresher rubber exactly when you need to attack.",
 q:"You start P10 while the front-runners launch on softs: which tyre do you pick?",
 o:["Softs like them, to not lose ground","Hard: extend, then finish the race on fresher rubber","Intermediates, just in case"], a:1,
 ex:"The compound offset lets you attack at the end on live rubber against dead tyres: it's an overtake set up 40 laps in advance.",
 pages:[
 "<span class='kicker'>Page 1 · Context</span><br>Miami, May 2023. Verstappen dominates the championship but botches qualifying and lines up ninth, with team-mate Pérez on pole. Herd logic says: start on softs like everyone ahead, recover what you can immediately. But the Red Bull pit wall reads the race backwards. Starting in the pack has a hidden advantage: <b>you have no position to defend</b>, so you can afford the strategy others won't dare. If the leaders open on softs, they'll have to stop early and finish on used hards. Whoever does the opposite — hards first, the softer compound at the end — arrives at the final third of the race with a knife between their teeth.",
 "<span class='kicker'>Page 2 · The race</span><br>Off the line Verstappen, on the hard tyre, doesn't lunge: he builds. He calmly picks off whoever comes into range while the soft-shod leaders begin to degrade and peel into the pits one by one. His first stint stretches past half distance: when he finally stops and bolts on fresh mediums, he rejoins right behind Pérez — whose hard tyres are now elderly. The script for the finale is already written: lap after lap the gap evaporates, and the pass for the win comes without the Mexican being able to put up real resistance. It wasn't a duel: it was an appointment made forty laps earlier, at the tyre choice on the grid.",
 "<span class='kicker'>Page 3 · Pit-wall analysis</span><br>This is the <b>compound offset</b>: deliberately shifting your windows relative to your rivals to hold fresher rubber in the moment that matters. It works because tyre advantage isn't linear: 10 laps of age difference are often worth 1-1.5s/lap in the closing stages, when degradation bites. The conditions: you need a car fast enough not to bleed too much in the 'slow' first stint, and you need discipline — the temptation to copy the car ahead is enormous. The risk: a badly-timed safety car can gift your rivals their stop and cancel the offset. In the game: when you start P8-P12, try hard→medium or medium→soft while the leaders do the reverse, and run 'conserve' early so you have rubber to burn at the end."]},

{t:"Never give up", y:"Canada 2011", fx:"rain-commit",
 ev:"Button won on the last lap having run last, after six stops and intermittent rain that suspended the race for hours: every change in conditions was an opportunity taken.",
 ins:"In unstable weather the race keeps reopening: reactivity to every change wins, not loyalty to the original plan.",
 q:"On-and-off rain all race: what's the right approach?",
 o:["Pick one strategy and keep it to the end","Reassess every lap: every weather change is an opportunity","Only stop when everyone else stops"], a:1,
 ex:"The plan is for the start. At Montréal the winner is whoever reads the track lap by lap and has the courage to change it.",
 pages:[
 "<span class='kicker'>Page 1 · Context</span><br>Montréal, June 2011. The Circuit Gilles Villeneuve is a ribbon between walls on an artificial island: violent braking zones, the infamous 'Wall of Champions', and continental weather capable of anything. That day the sky means business: rain at the start, rain in waves, a central downpour that will suspend the race for over two hours. It will be the longest race in F1 history, more than four hours from lights to flag. In conditions like these, strategy stops being a plan and becomes a continuous dialogue with the track: wets, inters, slicks, and back — every ten laps the right answer changes.",
 "<span class='kicker'>Page 2 · The race</span><br>Button's race is a disaster that becomes a masterpiece: contact with team-mate Hamilton, a penalty to serve, another clash with Alonso, a puncture — at one point he is <b>last</b>, twenty-first, with six trips through the pit lane on his sheet. But every time conditions change, he and the McLaren wall nail the call: inters at the right moment, slicks with courage the instant a dry line forms, ferocious pace in clear air. In the closing laps he's second and flying towards Vettel, who has led from the start: the pressure is such that on the penultimate lap the leader makes his only mistake, a half-spin at turn 6. Button wins on the final lap a race he had lost ten times.",
 "<span class='kicker'>Page 3 · Pit-wall analysis</span><br>The lesson isn't 'hope for miracles': it's that <b>in unstable races the value of decisions multiplies</b>. A normal dry race contains 1-2 real decisions; Montréal 2011 contained ten, and every weather transition was a chance to gain (or lose) ten seconds. Three operating rules: <b>(1)</b> forget past damage — pit stop number six is evaluated as if it were the first; <b>(2)</b> in transitions, what matters is the dry line, not the whole track: slicks work far sooner than they look like they should; <b>(3)</b> pressure forces mistakes from the car ahead — staying attached has value even when the pass looks impossible. In the game: in intermittent-rain races, never 'marry' a choice — reassess at every change in the sky."]},

{t:"Fatal indecision", y:"Monaco 2022", fx:"track-position",
 ev:"Ferrari called Leclerc in, then changed its mind on the radio when he was already committed to the pit lane: the muddle cost him the lead of his home race, lost from pole.",
 ins:"At Monte Carlo track position is worth more than any tyre: one stop, done well, with a clean decision. Indecision costs more than a wrong choice.",
 q:"You lead at Monaco with the rain easing, your direct rival has just pitted: what do you do?",
 o:["Decide during the lap, maybe change my mind at the last moment","Choose BEFORE and never go back: in or out","Make two quick stops to cover everything"], a:1,
 ex:"There's no overtaking here: every hesitation or confused call at the box is a position lost forever.",
 pages:[
 "<span class='kicker'>Page 1 · Context</span><br>Monte Carlo, May 2022. Charles Leclerc, Monegasque, carries a curse at his home race: he has never finished it. This time he's done everything right — pole position in a competitive Ferrari — and at Monaco pole is half the win, because here <b>you cannot overtake</b>: streets one-and-a-half cars wide, where the only real pass is the one made in the pit lane. On race day, though, it rains: delayed start, everyone on wet tyres, and in front of every pit wall the most delicate decision sequence there is — when to switch to inters, when to slicks, and how to run two cars (Leclerc and Sainz) through the same window without them tripping over each other.",
 "<span class='kicker'>Page 2 · The race</span><br>The track dries. Red Bull moves its pieces first, anticipating the tyre transitions. Ferrari responds late and then commits the irreparable: they call Leclerc in for slicks while weighing leaving Sainz out, and change the call on the radio — <b>'box, box… no, stay out, stay out!'</b> — when Charles is already past the point of no return, committed to the pit entry. The result: a double-stack stop queued behind his team-mate, seconds lost stationary in the box, and Leclerc emerging fourth, behind both Red Bulls and Sainz. From pole to fourth without ever being passed on track. Pérez wins, and Leclerc's team radio becomes the document of one of modern Ferrari's most bitter days.",
 "<span class='kicker'>Page 3 · Pit-wall analysis</span><br>Three textbook errors, all avoidable. <b>First:</b> at Monaco the only currency is track position — judge every plan by asking 'who do I rejoin behind?', not 'what tyre will I have?'. <b>Second:</b> decisions must be closed <b>before</b> the point of no return: an order reversed while the driver is committed to the pit entry is the worst of both worlds — you pay for the stop AND lose the alternative. <b>Third:</b> with two cars in the fight you need priorities set in advance, not negotiated live. The general rule: a mediocre decision taken a lap early almost always beats the perfect decision taken a lap late. In the game: at Monaco and Budapest plan ONE stop, pick the lap in advance, and once you arm the pit, don't go back."]},
];
LESSONS_EN.push(
{t:"Two stops or three?", y:"Spain 2016", fx:"stops-math",
 ev:"Red Bull gambled on two stops with an eighteen-year-old Verstappen, Ferrari chose three: position defended on older rubber won, and the youngest winner ever was born.",
 ins:"Every extra stop buys pace but costs the pit loss and throws you into traffic: the time gained on track must EXCEED the seconds lost in the pits. Always do the maths.",
 q:"Pit loss 21s; an extra stop would give you 0.4s/lap for 30 laps. Do you take it?",
 o:["Yes: fresh rubber is always better","No: 0.4×30 = 12s gained, less than the 21s stop","Depends on the compound colour"], a:1,
 ex:"12 seconds gained against 21 thrown away in the pit lane: the maths says stay out.",
 pages:[
 "<span class='kicker'>Page 1 · Context</span><br>Barcelona, May 2016. The most surreal week of the decade: Red Bull has just promoted Max Verstappen, <b>18 years old</b>, in place of Kvyat. Up front the Mercedes look untouchable — until, on lap one, Hamilton and Rosberg take each other out in the grass at turn 4. Suddenly victory is up for grabs between Red Bull and Ferrari, four cars, and it becomes pure chess: the Montmeló is the laboratory track par excellence — high degradation, hard to overtake — where strategy's eternal question, <b>two stops or three?</b>, is worth the entire pot.",
 "<span class='kicker'>Page 2 · The race</span><br>The pit walls split diagonally: Red Bull sends Verstappen on a <b>two-stop</b> and Ricciardo on three; Ferrari does the reverse, Raikkonen on two, Vettel on three. Three stops promise ever-fresh rubber and better pace; two stops promise track position. The ending is the verdict: Vettel and Ricciardo, though faster, resurface from their extra stops into traffic with too much to recover; Raikkonen gets into Verstappen's exhaust fumes, but the Montmeló is merciless — there is never quite enough delta to truly attack. The eighteen-year-old manages his tyres with glacial calm, doesn't miss a braking point, and becomes the youngest race winner in the history of Formula 1.",
 "<span class='kicker'>Page 3 · Pit-wall analysis</span><br>The stop count is the strategist's times-table. Formula: <b>the extra stop pays if (pace delta per lap × laps remaining) &gt; pit loss + traffic cost</b>. Real-world example: 0.4s/lap for 30 laps = 12s of theoretical gain against a 21s pit loss → it doesn't pay, and we haven't even counted laps stuck behind lapped cars. The 'traffic cost' is the line amateurs forget: rejoining 10th instead of 4th can cost another 5-10 seconds. Track position, conversely, has defensive value: the car ahead forces the rival to find at least 1-1.5s of pace just to attempt a move. In the game: before calling an extra stop, look at the laps remaining and do the multiplication — if it doesn't clearly beat the pit loss, stay out."]},

{t:"Patience, then attack", y:"Austria 2019", fx:"offset",
 ev:"Verstappen, after a bad start dropped him down the order, stopped later than his rivals: in the final laps he had much fresher tyres and completed the comeback, passing the leader two laps from the end.",
 ins:"Stopping AFTER the others hands you a finale on fresh rubber: you sacrifice half the race to dominate the other half. It takes patience while rivals pass you 'for free' in the pits.",
 q:"You're P4 and the top three have all already stopped: what do you do?",
 o:["Box immediately to copy them","Extend the stint: I'll have fresher tyres than them at the end","Give up the fight and manage"], a:1,
 ex:"Every lap you extend is an extra lap of freshness in the decisive moment of the race.",
 pages:[
 "<span class='kicker'>Page 1 · Context</span><br>Spielberg, June 2019. Scorching heat over the Styrian hills, thin air (the circuit sits at nearly 700 metres), a lap barely over a minute long. Verstappen starts on the front row in front of his orange army, but at lights-out his Red Bull bogs down — anti-stall, slipping clutch — and within three corners he plummets to mid-pack. Up ahead, Leclerc's Ferrari escapes. To the Red Bull pit wall the race looks compromised: you can come back at the Red Bull Ring, but you need a weapon. The weapon they choose is time itself: if you cannot be ahead now, build the conditions to be <b>fastest of all at the end</b>.",
 "<span class='kicker'>Page 2 · The race</span><br>While Leclerc and the other front-runners stop in the 'normal' window, Verstappen <b>extends</b>: he stays out many laps longer, losing time on paper but accumulating a treasure — at his stop he bolts on hard tyres around ten laps fresher than anyone ahead of him. The finale is a verdict delivered in instalments: he passes Vettel, passes Bottas, passes Hamilton, and with two laps to go arrives on Leclerc. The duel is rough, wheel-to-wheel at turn 3, with a contact the stewards will analyse for hours before confirming the result: Verstappen wins. The comeback had been written thirty laps earlier, in that counter-intuitive decision NOT to stop when everyone else did.",
 "<span class='kicker'>Page 3 · Pit-wall analysis</span><br>This is the <b>deferred offset</b> (an extended overcut): accepting lost time at mid-race to own the tyre delta when it truly matters. It works when: <b>(1)</b> you have clear air to extend without traffic — starting badly, paradoxically, helps; <b>(2)</b> in-race degradation rewards freshness at the end (heat, stressed compounds); <b>(3)</b> overtaking is possible on this track, because all your freshness is worth nothing at Monaco. The hard part is psychological: while you extend, the 'virtual' classification says you are losing. The pit wall must watch a different number: relative tyre age at the final lap. In the game: after a compromised start, resist copying everyone's stops — extend, conserve, and spend everything in the last 15 laps."]},

{t:"One lap too many", y:"Britain 2020", fx:"tyre-cliff",
 ev:"On the final lap Hamilton's front-left exploded after a marathon stint: he won on three wheels by a whisker, while other tyres stressed the same way had already failed.",
 ins:"Past the limit a tyre doesn't just slow down: it lets go, suddenly. The 'cliff' is a precipice, not a slope. Never plan stints that end at 100% wear.",
 q:"6 laps left, tyres at 88%, you're P3 with 25s over P4: what do you do?",
 o:["Stay out and cross my fingers","Box: I lose 21s but keep P3 in total safety","Push on, it's done anyway"], a:1,
 ex:"You have more margin than the pit loss: the stop locks in the podium, staying out risks a total zero.",
 pages:[
 "<span class='kicker'>Page 1 · Context</span><br>Silverstone, August 2020, the compressed Covid season. The Mercedes dominate and set up a one-stop race: a marathon final stint on the hard tyre, over thirty laps through the most violent corners on the calendar — Copse, Maggotts, Becketts — where the front-left works under monstrous loads. It is the perfect recipe for discovering where a tyre's structural limit lies: not the performance limit (the tyre getting slower), but the <b>physical</b> one — the moment when the weary carcass stops holding everything together.",
 "<span class='kicker'>Page 2 · The race</span><br>With two laps to go, the front-left of Bottas — running second — <b>explodes</b> without warning. While the Mercedes pit wall processes it, Sainz's tyre lets go too. Hamilton leads by a country mile, and the nightmare question arrives: stop him (no risk, but Verstappen is behind) or leave him out? They leave him out. And on the <b>final lap</b> his front-left detonates as well: half of England stops breathing as Hamilton drags the car on three wheels around half the lap, with Verstappen recovering thirty seconds in one tour… but Verstappen had just pitted for fresh tyres to chase the fastest lap. Hamilton wins by a handful of seconds, the shredded tread wrapped around the rim.",
 "<span class='kicker'>Page 3 · Pit-wall analysis</span><br>The key concept: degradation has <b>two regimes</b> — first the linear decline (a few tenths a lap, manageable), then the <b>cliff</b>, a precipice where performance collapses and failure risk becomes real. The problem is the cliff sends no invitations: telemetry shows vibrations and pressure loss only when it's nearly too late. Pit-wall rules: <b>(1)</b> plan stints to end at 85-90% of estimated life at most, never 100%; <b>(2)</b> when you hold more margin than the pit loss (25s in hand, a 21s stop), the safety stop is mathematically free: refusing it is pure gambling; <b>(3)</b> note Verstappen's irony — he stopped for the fastest lap and lost the win that was falling into his lap: even 'luxury' stops must be weighed. In the game: past 85% wear every lap is a roulette spin — the red bar is not a suggestion."]},

{t:"The Ardennes microclimate", y:"Belgium 2021", fx:"rain-commit",
 ev:"Rain so intense and persistent that the 'race' was a few laps behind the safety car for half points: in the Ardennes it can pour in one sector while the sun shines in another.",
 ins:"At Spa, anticipate: when the real deluge comes you need the full wet (not the inter), and whoever stops first often gains more than ten seconds on those who wait.",
 q:"First drops at La Source but sunshine at Stavelot, radar unsure: what do you do?",
 o:["Ignore it all: half the track is dry","Stand ready at the pit and read sector times","Fit full wets immediately"], a:1,
 ex:"At Spa partial rain is the norm: ready to jump, but you switch when the times (not the feelings) say so.",
 pages:[
 "<span class='kicker'>Page 1 · Context</span><br>Spa-Francorchamps is the longest circuit on the calendar: seven kilometres of rises and falls through the Ardennes forest, with over a hundred metres of elevation change between its lowest and highest points. This geography produces the phenomenon every strategist learns to fear: the <b>microclimate</b>. Atlantic fronts snag among the hills, and it regularly pours at Les Combes while the asphalt at La Source stays dry — on the same track, on the same lap. Weather radars, calibrated for broader scales, are often wrong here: the real telemetry is sector times and the drivers' eyes.",
 "<span class='kicker'>Page 2 · The race</span><br>August 2021: it rains from Friday, and on Sunday the sky concedes nothing. Zero visibility in the spray — at Spa, with the blind uphill Eau Rouge, the worst safety nightmare there is. Race control tries, waits, sends the cars to the grid, suspends; hours pass, the drenched crowd waits under a downpour that never relents. In the end, to award a result, the cars complete <b>a few laps behind the safety car</b>: never a green flag, not a single possible overtake. The classification freezes on qualifying — with the surprise of Russell second in a Williams — and half points are awarded. It is the shortest 'race' in history, and the points-rules debate that followed changed the regulations.",
 "<span class='kicker'>Page 3 · Pit-wall analysis</span><br>Spa teaches you to operate under <b>structural weather uncertainty</b>. Practical tools: <b>(1)</b> sector times beat the radar — if sector 2 slows by three seconds for everyone, it is raining there, full stop; <b>(2)</b> the inter/full-wet delta flips fast: in real rain the inter aquaplanes and the wet gains even 4-5 seconds a lap, so you answer a deluge with the wet, no heroics; <b>(3)</b> partial rain creates 'hybrid laps' where no tyre is right: there, whoever anticipates the trend wins (worsening → wet early; improving → inter early). And a lesson in humility: sometimes nature wins, and banking the available points IS the strategy. In the game: Spa has the highest rain probability of the calendar — keep a wet plan ready even in sunshine."]},

{t:"Fresh rubber vs position", y:"Hungary 2019", fx:"offset",
 ev:"Mercedes called Hamilton in for a second stop with 20 laps left, dropping him nearly 20 seconds behind Verstappen: on new mediums he hunted him down and passed him three laps from the flag.",
 ins:"The extra stop pays only if: much superior pace, enough laps, a recoverable gap (~1s/lap of delta). Do the maths BEFORE you call it.",
 q:"P2, tired tyres, 20 laps left, 18s off the leader. New rubber is worth 1.2s/lap: box?",
 o:["No, the podium is already banked","Yes: I pay 21s for the stop but recover 1.2×20 = 24s","Yes, but fit the hard to be safe"], a:1,
 ex:"The sum works by a whisker: 24s recoverable against ~21 of cost. It's the calculated risk of champions.",
 pages:[
 "<span class='kicker'>Page 1 · Context</span><br>Hungaroring, August 2019. Verstappen takes the first pole of his career on a track that is Monaco without the walls: narrow, twisty, where a pass demands a second and a half of extra pace. Hamilton stalks him all race but every attack breaks down: on equal tyres, DRS isn't enough. The situation with twenty laps to go is frozen — Verstappen ahead on ageing rubber, Hamilton behind on rubber in the same state. On paper it ends like that. Unless you have the courage to <b>lose</b> position in order to take it back: the second stop nobody expects.",
 "<span class='kicker'>Page 2 · The race</span><br>The Mercedes pit wall runs the numbers and calls Hamilton: box, new medium tyres, rejoining about <b>twenty seconds</b> behind Verstappen. On the radio Lewis is sceptical — it feels like surrender. But the numbers say otherwise: with a delta of over a second a lap and twenty laps available, the recovery is possible — tight, but possible. The hunt begins: fast lap after fast lap, the gap falls with merciless regularity while Red Bull, holding no counter-stop (they would rejoin behind), can only watch the numbers on the monitor. Three laps from the end Hamilton arrives, attacks, and passes a Red Bull on spent tyres. Red Bull pits at the last for the fastest lap: the podium is safe, the win is not.",
 "<span class='kicker'>Page 3 · Pit-wall analysis</span><br>This is the complete equation of the <b>attack stop</b>: you make it when (pace delta × laps remaining) exceeds (pit loss + gap to recover + margin for the pass). In the real case: ~1.2s × 20 laps = 24s against ~21s of cost — a three-second margin, razor-thin, professionals only. The hidden conditions: <b>(1)</b> you need clean air — one slow backmarker can eat the margin; <b>(2)</b> the rival must have no counter-move: if he can stop too and stay ahead, the attack is sterile; here Verstappen was 'frozen' because his stop would have dropped him behind; <b>(3)</b> you need a driver able to do 20 qualifying laps. In the game: when you're second on tired tyres with many laps left, compute the delta — if the maths works even barely, the attack stop is the champions' move."]},

{t:"Lap 1 is worth gold", y:"Netherlands 2023", fx:"rain-commit",
 ev:"Sudden rain on the opening lap: those who dived straight into the pits for inters gained an avalanche of positions; those who waited 'a lap to understand' paid dearly.",
 ins:"When rain arrives hard and suddenly, every lap of hesitation on slicks costs 10-15 seconds: immediate courage beats prudent confirmation.",
 q:"Sudden fat drops on lap 2, you're losing grip everywhere: what do you do?",
 o:["One evaluation lap to understand","Box immediately for intermediates","Wait to see what the leaders do"], a:1,
 ex:"If the water is already heavy, every lap on slicks is an eternity — and an invitation to spin.",
 pages:[
 "<span class='kicker'>Page 1 · Context</span><br>Zandvoort, August 2023. The circuit in the North Sea dunes lives on wind and on showers that roll in off the water with minutes of warning, not hours. Verstappen races at home in front of an oceanic orange army, chasing the record for consecutive wins. At lights-out the sky holds — but the radar shows a cell approaching from the coast. The question isn't whether it will arrive, but when and how hard: and that is the situation that separates brave pit walls from prudent ones, because rain on lap one is the moment when information is at its minimum and the value of the decision at its maximum.",
 "<span class='kicker'>Page 2 · The race</span><br>The cell arrives <b>immediately</b>, during the first lap: drops, then proper water. Pérez and a few others dive straight into the pits for intermediates — a choice that looks like panic and is actually lucidity. Those who stay out 'to understand', including Verstappen for one lap too long, discover that on slicks you lose ten, fifteen seconds a lap, skating as if on ice. Within two laps the classification is unrecognisable: Pérez finds himself leading by a huge margin. The track then dries, the race normalises and Verstappen claws it back with a ferocious comeback; late on, a second downpour, a red flag and a restart confirm the rule of the day. Verstappen wins — but the lesson was given by those who didn't hesitate on lap 1.",
 "<span class='kicker'>Page 3 · Pit-wall analysis</span><br>'Instant rain' breaks the classic decision loop (observe → confirm → act) because the cost of observing is enormous: 10-15 seconds per lap on the wrong tyre, plus the concrete risk of a spin or crash. The correct framework is <b>asymmetric</b>: ask how much you lose if you're wrong in each direction. Pit immediately and the rain stops? You lose one stop, ~20 seconds. Stay out and the rain builds? You lose 30-40 seconds and risk the race. When water is already visible on the asphalt, the 'prudent' error is the expensive one. Tactical note: in the opening laps the reward for stopping at once is amplified — the pack is bunched and every second is a position. In the game: if it rains hard early and you're on slicks, don't wait for radar confirmation — the immediate box is almost always the move."]},

{t:"The free stop", y:"Italy 2020", fx:"sc-pit",
 ev:"At Monza, Gasly had just pitted when the race was neutralised and then stopped: his stop turned out to be effectively free, he emerged at the front and sealed a historic win.",
 ins:"Neutralisations rewrite the classification: one stop made at the right moment can be worth ten positions without a single overtake. Where the pit lane is expensive, the opportunity is worth double.",
 q:"At Monza the pit loss is huge (23s): when does it pay most to stop?",
 o:["Always as early as possible","During a neutralisation, if one comes","Always as late as possible"], a:1,
 ex:"Under the safety car the loss halves: on a track where the stop is 'expensive', the saving is enormous.",
 pages:[
 "<span class='kicker'>Page 1 · Context</span><br>Monza, September 2020, behind-closed-doors racing in the pandemic year. The Temple of Speed has a strategic quirk: with flat-out straights taken at over 340 km/h, the time lost travelling the speed-limited pit lane is among the highest of the year. Translation: stops here are paid at premium prices, and a discounted stop is worth gold. The Mercedes dominate, Hamilton is checked out up front, and nobody imagines the race is about to be decided by a chain of events that will reward the man who had stopped at the — apparently — most ordinary moment.",
 "<span class='kicker'>Page 2 · The race</span><br>The chain: a car stops on track near the pit entry → safety car → race control <b>closes the pit lane</b> for safety. Pierre Gasly had pitted moments before the closure: a stop made under neutralisation, almost free. Hamilton instead enters the pits while they are closed — a 10-second penalty to serve. Shortly after, a violent crash (Leclerc at Parabolica, driver unhurt) brings the <b>red flag</b>: field frozen, gaps wiped. At the restart Gasly finds himself in the leading group with the race in his hands: he repels Sainz's assaults for twenty laps and hands AlphaTauri — and himself — a victory no algorithm had predicted. The first French win in F1 for decades.",
 "<span class='kicker'>Page 3 · Pit-wall analysis</span><br>Monza 2020 is the manifesto of the <b>conditional value of pit stops</b>: the same stop can cost 23 seconds or 5, depending on WHEN you make it. Operating principles: <b>(1)</b> the higher a circuit's pit loss, the bigger the neutralisation discount — at Monza and Singapore the SC is a 50% voucher on an already premium price; <b>(2)</b> the rules matter as much as the stopwatch: closed pit lanes, VSCs ending while you're in the lane, regulatory windows — the wall that knows the rulebook steals seconds from the wall that only knows telemetry; <b>(3)</b> luck exists, but in strategy 'luck' means having put yourself in position to receive it: Gasly was there because his wall had moved early. In the game: watch the race control monitor — every neutralisation on a high-pit-loss track is a gift with an immediate expiry date."]},

{t:"The total unknown", y:"Madrid 2026", fx:"flex",
 ev:"The Madrid circuit debuts on this year's calendar: zero history, zero real degradation data, simulations all to be verified. Every pit wall starts level.",
 ins:"Without historical data, flexibility IS the strategy: start on the most versatile compound, keep both pit windows open and learn by watching your rivals' first stints.",
 q:"New track, unknown degradation: which tyre do you start on?",
 o:["Soft: better to attack at once","Medium: the most versatile, keeps every option open","Hard: the most prudent choice of all"], a:1,
 ex:"The medium lets you either extend or stop early, depending on what you learn in the opening laps.",
 pages:[
 "<span class='kicker'>Page 1 · Context</span><br>Madrid 2026: the Spanish Grand Prix moves to a brand-new layout around the IFEMA exhibition district — a hybrid of street sections and purpose-built fast stretches. For pit walls it is the rarest event in the trade: a track <b>with no history</b>. No degradation archives, no safety-car statistics, no reference for the real overtaking spots. Simulator work and the teams' mathematical models offer predictions, but every strategist knows that on a new track's first weekend the predictions get falsified: fresh asphalt evolves wildly, kerbs surprise, and even the real pit loss is only discovered by doing it.",
 "<span class='kicker'>Page 2 · The story (of a typical debut)</span><br>How does a debut usually go? Recent precedents teach us. New asphalt means <b>extreme evolution</b>: the track can gain whole seconds between Friday and Sunday, flipping the compound hierarchy. Close walls in the street sections produce above-average safety cars (the statistics of recent new street circuits are unambiguous). And the simulated degradation gets regularly contradicted in one direction or the other: tracks 'cruel' on paper turn out gentle, and vice versa. The typical first-year result: divergent strategies between teams, the odd spectacular winning gamble, and more shuffled classifications than usual. It is the weekend where adaptive intelligence beats computing power.",
 "<span class='kicker'>Page 3 · Pit-wall analysis</span><br>Deciding without data is a precise discipline. <b>(1) Maximise options:</b> starting on the medium dominates because from there you can convert in either direction — shorten towards a two-stop or extend towards a one-stop — while soft and hard chain you to one plan. <b>(2) Use rivals as the experiment:</b> twenty cars are twenty sensors; the first ten laps tell you the real degradation better than a thousand simulations — watch who collapses, and when. <b>(3) Prepare decision trees, not decisions:</b> 'if deg is high I do X at lap N, if low I do Y' — the ready-made rule beats improvisation. <b>(4) Respect the unknown:</b> extra tyre margin, because nobody knows where a new track's cliff lives. In the game: at Madrid start on mediums, read the first stints in the tower, and set your plan at lap 10, not lap 1."]},
);
LESSONS_EN.push(
{t:"Anything can happen", y:"Azerbaijan 2021", fx:"sc-pit",
 ev:"Verstappen was leading when a tyre exploded 5 laps from the end; red flag, standing restart, and championship leader Hamilton threw it all away in one braking zone. The man in third won.",
 ins:"Baku hands out neutralisations and plot twists: reach the finale with tyre margin for a crazy restart, and never sacrifice safe points for a long shot.",
 q:"You lead at Baku by 8s with healthy tyres, 10 laps to go: how do you run it?",
 o:["Push flat out to the flag","Manage: keep rubber and margin for a possible restart","Extra stop to try the fastest lap"], a:1,
 ex:"Races here are decided at restarts: arriving at the finale with live rubber is the real priority.",
 pages:[
 "<span class='kicker'>Page 1 · Context</span><br>Baku is a two-headed monster: a medieval street section squeezed around the old city, and a straight over two kilometres long where cars exceed 340 km/h. The combination produces the highest chaos density on the calendar: walls that punish every smudge, tyres stressed at insane speeds, slipstreams and DRS that make no lead safe. June 2021: Verstappen and Hamilton are trading the championship lead point by point, and the race looks like Max's moment — a dominant Red Bull, Hamilton struggling, victory within reach. At Baku, though, 'within reach' means nothing.",
 "<span class='kicker'>Page 2 · The race</span><br>Already at half distance a tyre failure (Stroll, into the walls on the main straight) had lit a warning lamp. With <b>five laps to go</b>, the brutal confirmation: Verstappen's left-rear explodes at over 300 km/h on the straight. The driver is unhurt; the race is first neutralised, then <b>stopped</b>: standing restart, a two-lap sprint to decide everything. Hamilton restarts second with the win served on a plate — but into the first braking zone a switch knocked by mistake (the infamous 'magic button' altering brake balance) locks his front wheels: straight on into the run-off, race over. Pérez wins — the man who was simply there, intact, with car and nerves in order. The two title contenders: zero points apiece.",
 "<span class='kicker'>Page 3 · Pit-wall analysis</span><br>Baku 2021 condenses three truths. <b>(1) Structural risk is real:</b> on tracks that batter tyres at very high speed, an overlong stint isn't just slow — it's dangerous; tyre margin at the end is insurance, not a luxury. <b>(2) Restarts are races of their own:</b> two laps from a standing start on cold tyres cancel 49 laps of perfect management; whoever reaches the restart with the right compound and a cold head harvests what others sowed. <b>(3) Championship arithmetic:</b> in lottery races, the expected value of 'banking it' beats the gamble — trashing a safe podium chasing an unlikely win is the classic error pit walls regret in December. In the game: at Baku always manage a tyre cushion for the finale, and treat every restart as a brand-new race start."]},

{t:"The SC that always comes", y:"Singapore 2008", fx:"sc-pit",
 ev:"Alonso only needed to have stopped a few laps before a safety car to win from the back. Years later it emerged the crash had been staged (the 'crashgate' scandal) — but the strategic principle stands.",
 ins:"At Marina Bay the safety car appears in almost every edition: whoever has ALREADY made their stop when it comes inherits a huge advantage over those still to stop.",
 q:"Marina Bay, lap 18 of 62, the pit window just opened: what do you do?",
 o:["Stretch the stint as long as possible","Stop early: if the SC then comes, I'm ahead of everyone","Wait for the safety car and only stop then"], a:1,
 ex:"Statistically the SC will come: better to have your stop already behind you when it does.",
 pages:[
 "<span class='kicker'>Page 1 · Context</span><br>Singapore, September 2008: the first night race in F1 history, on a slow, very long street circuit, suffocating with humidity, lined with walls for every metre. <b>Refuelling</b> was legal then: strategies revolved around fuel load, and a safety car at the wrong moment could wreck the race of anyone still needing to stop (the pit lane being closed during the early neutralisation phase, by regulation). Alonso, in a struggling Renault, starts fifteenth: an anonymous race foretold. His team fuels him light and stops him <b>very early</b> — a seemingly desperate move.",
 "<span class='kicker'>Page 2 · The race</span><br>A few laps after Alonso's stop, his team-mate Piquet Jr. crashes at a corner with no crane access: <b>safety car</b>. The closed pit lane traps everyone who still needed fuel; when it reopens, the pack stops en masse and resurfaces behind the Spaniard. From fifteenth to effectively first: Alonso manages the rest and wins. A year later the truth emerges and turns the masterpiece into scandal: the crash had been <b>ordered</b> by the team's management — 'crashgate', one of the gravest cases in the sport's history, with bans for the executives involved. What remains, stripped of the disgrace, is the strategic mechanism that fraud exploited: at Marina Bay, whoever has already pitted when the safety car comes wins the lottery.",
 "<span class='kicker'>Page 3 · Pit-wall analysis</span><br>Marina Bay has one of the championship's highest safety-car probabilities: that near-certainty changes how you plan. The key concept is your <b>position relative to your own stop</b>: at any moment you are either 'exposed' (still to stop: an SC hurts you or helps rivals) or 'covered' (already stopped: an SC gifts you seconds). In Singapore it pays to minimise exposure time: stop as soon as the window opens, accepting a longer final stint, because the expected value of being covered beats the cost of older rubber. An ethical and technical corollary: crashgate proved how powerful this mechanism is — powerful enough that someone manufactured it. In the game: in Singapore (and on street circuits) stop early within the legal window and let the statistics work for you."]},

{t:"Strike early, then resist", y:"United States 2021", fx:"undercut",
 ev:"Verstappen made an aggressively early first stop to jump Hamilton, then defended for over twenty laps on older tyres, rationing every tenth to the flag.",
 ins:"The undercut hands you the position but leaves you older tyres for the finale: after the attack comes the management. The winner is whoever can do both.",
 q:"You've just completed the undercut and lead, but your rival's tyres are 8 laps fresher: what pace do you run?",
 o:["Push to escape immediately","Conserve: I'll need live rubber to defend at the end","Stop again"], a:1,
 ex:"An undercut's advantage is defended through management, not by burning the tyre in three glory laps.",
 pages:[
 "<span class='kicker'>Page 1 · Context</span><br>Austin, October 2021. The Hamilton-Verstappen title fight enters its decisive races on a track that consumes: COTA has fast sweeps inspired by Silverstone and Suzuka, bumpy asphalt and high degradation. At the start Hamilton beats Verstappen to turn 1 and takes the lead: for Red Bull the worst-case scenario materialises — chasing a Mercedes of similar pace on a track where on-track passing costs a fortune. When the on-track pass isn't realistic, the pit-lane pass remains — but the undercut, here, carries a hidden price that the second half of the race will duly present.",
 "<span class='kicker'>Page 2 · The race</span><br>Red Bull breaks the deadlock with an <b>aggressively early</b> first stop: Verstappen into the pits well ahead of schedule, hard tyres, ferocious out-laps. Mercedes covers late, and when Hamilton rejoins, the position is gone: undercut complete. But the bill arrives: having gone early twice (the second stop is also premature, to protect position), Verstappen faces the final stint on tyres far older than Hamilton's, who descends on him over the last ten laps, gaining visibly. The finale is a lesson in management under siege: Max rations traction and battery, uses dirty air as a shield, and crosses the line just over a second clear. The attack won the position; the management won the race.",
 "<span class='kicker'>Page 3 · Pit-wall analysis</span><br>The undercut is a <b>loan</b>: it gives you the position today and presents the bill at the end, in the form of older tyres. Austin shows the complete package: <b>(1)</b> an early stop pays when the fresh-tyre delta is high and there is clear air at rejoin; <b>(2)</b> every lap of anticipation is paid for with a lap of extra tyre age at the most fragile moment — so dose the anticipation: the minimum needed to jump him, not a lap more; <b>(3)</b> after the undercut the right pace is conservative: the rival on fresher rubber will arrive, and you'll need live tyres for the last five laps, where defence is won on traction. The symmetric variant is letting the rival go early and keeping the freshness (the overcut): it works where traffic punishes the rejoiner. In the game: after a successful undercut switch straight to 'Conserve' and save your Overtake for the final defence."]},

{t:"Thin air", y:"Mexico, high altitude", fx:"stops-math",
 ev:"At 2,200 metres the thin air strips downforce and cooling, but also reduces tyre stress: real degradation is often lower than forecast, and here the one-stoppers usually rule.",
 ins:"Read the track, not the catalogue: where real degradation is low, the saved stop is worth more than the faster compound.",
 q:"Mid-race you find degradation is far lower than expected: what do you do?",
 o:["Stick to the original two-stop plan","Extend the stint and convert to a one-stop","Stop anyway in the planned window"], a:1,
 ex:"A saved stop is ~20 seconds gifted to anyone still clinging to the old plan.",
 pages:[
 "<span class='kicker'>Page 1 · Context</span><br>The Autódromo Hermanos Rodríguez in Mexico City sits at about <b>2,200 metres</b>: the air is roughly a fifth thinner than at sea level, and that rewrites the car's physics. Wings generate less load (maximum-downforce packages behave like Monza trim), radiators cool worse, turbochargers spin at their limit, top speeds explode. And the tyres live in a strange world: less aerodynamic load means less energy fed into the compound through corners — degradation, counter-intuitively, often <b>falls</b>. For strategists, Mexico is where pre-race models go wrong most happily.",
 "<span class='kicker'>Page 2 · The story (the recurring script)</span><br>The script repeats edition after edition: Thursday's simulations point to a two-stop race, Friday's long runs sow doubt, and on Sunday the truth — real degradation is lower than forecast, and the race is won on <b>one stop</b>, typically medium→hard, stretching the first stint far past the theoretical window. Whoever stays loyal to the two-stop finds themselves paying twenty seconds of pit loss for a pace advantage that never recoups itself in traffic — complicated by the fact that in thin air, following closely overheats brakes and engine. Recent editions tell the same story: the podium speaks the language of the single stop.",
 "<span class='kicker'>Page 3 · Pit-wall analysis</span><br>The deep lesson is <b>revising the plan with live race data</b>. Method: in the first 10-12 laps measure real degradation — how much are you losing per lap versus your early laps? If the loss is under half the estimate, converting to one fewer stop becomes nearly always dominant: the gain is the full pit loss (~20s) against a pace penalty that, at low deg, never repays it. The traps: <b>(1)</b> converting means a long final stint — verify the tyre reaches the end well clear of the cliff; <b>(2)</b> overtaking at altitude is complicated by overheating in the wake: a position gained by saving a stop is especially defensive here; <b>(3)</b> the reverse also holds — if real deg is WORSE than forecast, adding an early stop beats dragging yourself round on dead rubber. In the game: in Mexico check your wear at laps 10-12 and have the courage to rewrite the plan."]},

{t:"The final gamble", y:"Brazil 2008", fx:"gamble-end",
 ev:"Rain in the closing laps at Interlagos: Glock stayed on dry tyres and at the last corner of the last lap was passed by Hamilton, who thereby won the title by one point.",
 ins:"Staying out as the weather worsens has an exponential cost: if the rain builds, you lose everything in the last two laps. Calculate what you RISK, not just what you gain.",
 q:"3 laps left, rain starting, you're P4: do you stop for inters?",
 o:["Never: I'd lose the position","It depends: if the rain builds yes, on a barely damp track you can hold","Always, no matter what"], a:1,
 ex:"It's a calculation: building rain = undriveable slicks = forced stop. Steady drizzle = you can risk it.",
 pages:[
 "<span class='kicker'>Page 1 · Context</span><br>Interlagos, 2 November 2008, the season finale. Hamilton (McLaren) arrives seven points clear of Massa (Ferrari), who races at home: Lewis needs fifth place, whatever Felipe does. The São Paulo sky, as per tradition, is a character in the plot: rain before the start, a drying track, and a new front the radars place exactly <b>over the final laps</b>. It is the textbook scenario of the late dilemma: with a handful of laps left, the stop costs a hard position — but staying out on the wrong tyres can cost everything.",
 "<span class='kicker'>Page 2 · The race</span><br>The rain arrives around ten laps from the end. Almost everyone dives in for intermediates; Toyota leaves <b>Glock</b> out on slicks, betting the water stays light: the move vaults him up the order. Massa wins the race and for thirty seconds the Ferrari garage celebrates the title: Hamilton, shuffled to sixth after being passed by Vettel, no longer seems able to retake the fifth place worth everything. But the rain <b>builds</b>, and Glock's slicks become suddenly undriveable: on the final lap he loses nearly twenty seconds, and at the last useful corner — Juncão, the climb to the line — Hamilton slips past. Fifth place. World champion by a single point, in the cruellest and most famous finish of the modern era.",
 "<span class='kicker'>Page 3 · Pit-wall analysis</span><br>Glock's gamble wasn't stupid: it was a bet with one variable misread — the <b>derivative</b> of the rain. On a barely damp, stable track, warm slicks can survive, and the position gifted by not stopping is gold; but if intensity grows, the driveability decay is exponential: you go from 'losing 2 seconds a lap' to 'cannot keep the car on the road' within two laps. The framework: in the last 5 laps evaluate (a) current intensity, (b) trend, (c) laps remaining. Stable rain and ≤3 laps → you can hold; building rain → the maths is merciless, every lap on slicks costs more than the stop itself. And remember the other side: Hamilton won the title because HIS wall had stopped — trading position for driveability — and because up the road somebody had risked too much. In the game: with wet weather arriving late, watch the radar and the trend, not your pride."]},

{t:"Tyres in the cold", y:"Las Vegas 2023", fx:"cold",
 ev:"A night race on freezing asphalt: tyres out of their temperature window, graining everywhere, unpredictable grip. The harder compounds never 'switched on'.",
 ins:"On cold asphalt the hard tyre can be slower AND wear out sooner (graining): here the softer compounds work better. Temperature flips the compound hierarchy.",
 q:"Track at 12°C: what risk does the hard tyre run?",
 o:["It overheats quickly","It never reaches temperature: low grip and graining","None: it's always the safest"], a:1,
 ex:"A cold tyre slides, and by sliding it ruins itself: the 'safe' choice becomes the worst one. (In this GP the hard will be penalised!)",
 pages:[
 "<span class='kicker'>Page 1 · Context</span><br>Las Vegas, November 2023: F1 returns to the Strip with a race in the dead of night in the Nevada desert. Track temperatures among the lowest the category has ever faced — even below 15°C — on a layout of long straights (little energy into the tyres) and freshly laid, smooth asphalt (little mechanical grip). The weekend starts even worse than feared: in first practice a manhole cover fails under a passing car, causing serious damage and a cancelled session — teams reach the race with very little data. For the tyres it is the inverse of the usual scenario: the problem isn't overheating, it's <b>switching them on</b>.",
 "<span class='kicker'>Page 2 · The race</span><br>In the race, what the engineers feared happens: tyres struggle to enter their working window, and a cold, sliding tyre develops <b>graining</b> — the compound tears into micro-rolls on its surface, further reducing grip in a vicious circle. The hard compound, needing the most energy to activate, suffers worst: slow when new, slow when old. The winning choices run against 'normal' race logic: softer compounds than planned, ultra-delicate opening laps after every stop (new AND cold tyres = ice), safety-car restarts turned into skating contests. The race — between straight-line passes and neutralisations — turns out surprisingly spectacular, and is won by whoever kept their tyres in the right window longest.",
 "<span class='kicker'>Page 3 · Pit-wall analysis</span><br>Every compound has a <b>thermal window</b>: below it, it generates no chemical grip and damages itself through sliding (graining); above it, it overheats and degrades through blistering. Cold asphalt shifts everything downwards and <b>flips the hierarchy</b>: the soft, which activates easily, becomes simultaneously the fastest and — counter-intuitively — often the most durable, because it works inside its window instead of tearing itself apart sliding. Operational consequences: <b>(1)</b> in the cold, discount your plan by one hardness step (where you'd run M-H, consider S-M); <b>(2)</b> the laps after a stop are the most dangerous of the whole race: new AND cold rubber — allow a margin before attacking or defending on the limit; <b>(3)</b> restarts in these conditions are traps for the unwary and opportunities for those who anticipate them. In the game: at Las Vegas the hard is penalised — build your strategy on soft and medium and beware the post-pit laps."]},

{t:"The capped stint", y:"Qatar 2023", fx:"tyre-cliff",
 ev:"Lusail's kerbs were damaging tyre sidewalls: for safety a maximum of 18 laps per set was imposed, forcing everyone into at least three stops.",
 ins:"When a stint cap exists, strategy becomes a puzzle of windows: plan ALL your stops from the start and don't waste a single lap of rubber. In this GP you'll have a 20-lap limit per slick set!",
 q:"A 20-lap-per-set limit in a 57-lap race: what's the minimum number of stops?",
 o:["One","Two (three stints of ~19 laps)","Four"], a:1,
 ex:"57 ÷ 20 = you need at least 3 stints, hence a minimum of 2 stops: every lap must be planned ahead.",
 pages:[
 "<span class='kicker'>Page 1 · Context</span><br>Lusail, October 2023. After practice, Pirelli's engineers inspect the used tyres and find something wrong: <b>micro-damage in the sidewalls</b>, caused by the Qatari track's 'pyramid' kerbs, attacked lap after lap at very high cornering speeds. The risk is sudden structural failure — every governing body's nightmare. The solution, unprecedented in its form: a <b>regulatory limit of 18 laps</b> per set of tyres in the race, imposed for safety. Overnight, every team's strategy plans go in the bin: the race becomes a constrained mathematics problem.",
 "<span class='kicker'>Page 2 · The race</span><br>With 57 laps to cover and sets capped at 18, the race forces at least three stops on everyone: 'extend-if-needed' management disappears, replaced by drawing-board planning — which compounds, in which order, with windows that must also accommodate possible safety cars. But the tyre cap isn't the only enemy: the Gulf's humid heat, in an evening race run at perpetual sprint pace (the tyre 'expires' regardless), pushes drivers to their physical limit — one feels ill in the cockpit, one vomits inside his helmet, one retires unwell. Verstappen, who had already sealed the title the previous day in the sprint, dominates a race drivers would remember as one of the toughest ever.",
 "<span class='kicker'>Page 3 · Pit-wall analysis</span><br>A stint cap turns strategy from continuous optimisation into a <b>combinatorial puzzle</b>: given N laps and a per-set ceiling, the minimum stop count is fixed (⌈N/limit⌉−1), and every 'wasted' lap — stopping on lap 14 with an 18-lap set — is thrown-away capacity you must claw back by shortening other stints. Principles: <b>(1)</b> draw the windows backwards from the chequered flag, leaving 1-2 buffer laps per stint against safety cars and surprises; <b>(2)</b> with 'the tyre expires anyway' pacing, classic management loses value: you push more, and brakes, engine and the driver's body become the limit; <b>(3)</b> a safety car changes the sums — stopping under SC inside a valid window is a double win. The general lesson applies everywhere: every race has constraints (mandatory compounds, regulatory windows), and a good wall turns them into weapons. In the game: at Lusail you have a 20-lap slick-set limit — plan your 2-3 stops BEFORE the start and respect the windows."]},

{t:"The last-chance stop", y:"Abu Dhabi 2021", fx:"sc-late",
 ev:"A safety car a few laps from the end: Verstappen pitted for new softs, Hamilton stayed out on old hards to defend position. At the restart — managed in a highly controversial way — fresh rubber decided race and title on the final lap.",
 ins:"With a late safety car the stop is nearly free: new rubber at the restart almost always beats position defended on dead tyres. And if YOU lead, cover the move by stopping too.",
 q:"SC on lap 53 of 58, you're P2 on old tyres and the leader stays out: what do you do?",
 o:["Stay out too, for consistency","Box for softs: at the restart I'll have an enormous weapon","Box for hards, better not to risk"], a:1,
 ex:"Under SC you lose very little and restart glued to him with new rubber against dead rubber: it's the move that decided a world title.",
 pages:[
 "<span class='kicker'>Page 1 · Context</span><br>Yas Marina, 12 December 2021. Hamilton and Verstappen arrive at the final race <b>level on points</b> — unseen for decades: whoever finishes ahead is world champion. The race seems settled early: Hamilton gets the better launch, builds a solid lead and manages it on hard tyres; Red Bull tries everything, including an extended stint and the strategic use of the second car, but with ten laps left the gap is around ten seconds. The Mercedes wall has the race in hand, and only one thing can reopen it: a neutralisation. On lap 53 of 58, Latifi crashes. <b>Safety car.</b>",
 "<span class='kicker'>Page 2 · The race</span><br>The two pit walls choose opposite paths within three seconds. Red Bull: box, <b>new soft tyres</b> — Verstappen has nothing to lose, under SC the stop is cheap. Mercedes: Hamilton <b>stays out</b> — stopping would surrender track position, and if the race finishes under the safety car (a realistic scenario), position IS the title. Then comes the sequence that will be analysed for years: race control first communicates that lapped cars will not be released, then releases <b>only</b> the five cars separating the two contenders, and restarts the race for a single final lap. Verstappen, on new softs against forty-lap-old hards, attacks at the first opportunity and passes: world champion on the last lap of the last race. Mercedes' protests are rejected; months later, the FIA acknowledges errors in the handling of the procedure and restructures race direction.",
 "<span class='kicker'>Page 3 · Pit-wall analysis</span><br>Setting aside the controversy — legitimate and documented — the pure strategic situation is the definitive case study on the <b>late SC</b>. The theory: with a neutralisation in the closing laps, (a) the stop costs very little, (b) the gaps are wiped, (c) the new-versus-old tyre delta at the restart is enormous, with no time left for it to even out. The chaser must stop, <b>always</b>: tiny risk, huge weapon. The leader faces a real but lopsided dilemma: staying out only wins if the race does NOT restart; in every restart scenario, fresh rubber dominates. The leader's ideal cover is to stop as well (keeping position if the gap exceeds the SC-discounted pit loss) — Hamilton couldn't, because Verstappen was too close: which is exactly why Red Bull had kept the gap under that threshold. In the game: at Abu Dhabi the late SC is likely — whoever you are in the order, when it appears in the closing laps the answer is almost always: box, softs, and settle it at the restart."]},
);
/* ============ Griglia, gomme, carriera ============ */

/* ============ Aggiornamenti didattici: casi energia 2026 ============ */
LESSONS[0].pages.push("<span class='kicker'>Pagina 4 · Caso energia 2026</span><br><b>Melbourne 2026: una gara può essere compromessa prima ancora del via.</b> Mercedes ha dichiarato che la gestione dell’energia nel giro di formazione lasciò entrambe le vetture con un livello di batteria basso in griglia: Russell perse una posizione e Antonelli scivolò fino alla settima. Russell spiegò inoltre che, dopo essere passato davanti, avrebbe potuto distribuire meglio l’energia per difendersi dal contrattacco. La lezione per il muretto è doppia: <b>(1)</b> lo stato di carica è una condizione iniziale da controllare, non un dettaglio; <b>(2)</b> usare tutta l’energia per completare un attacco può renderti vulnerabile pochi secondi dopo. Nel gioco: non arrivare a un duello con SOC critico e non confondere il giro veloce con il giro strategicamente migliore.<br><br><a href='https://www.mercedesamgf1.com/reports/race-report-starting-the-new-f1-era-in-style-with-1-2-in-melbourne' target='_blank' rel='noopener'>Fonte: Mercedes-AMG F1, race report Australia 2026 ↗</a>");
LESSONS[2].pages.push("<span class='kicker'>Pagina 4 · Caso energia 2026</span><br><b>Suzuka 2026: il secondo alla Detection Line crea o distrugge una catena di sorpasso.</b> Ferrari osservò che, quando una vettura supera il secondo di distacco, perde l’Overtake e tende a formarsi un trenino. Nella stessa gara Verstappen riferì che, mentre cercava di passare Gasly, non aveva batteria sul rettilineo principale. Altri piloti descrissero il compromesso opposto: attaccare può lasciarti esposto subito dopo. La lezione del muretto è preparare l’azione su più giri: <b>ricarica → entra nel range → ricevi l’attivazione → scegli dove impiegare l’energia → conserva una riserva per non subire il controsorpasso.</b> Nel gioco l’Overtake non ha più tre usi arbitrari: si sblocca soltanto dopo una Detection Line valida e richiede SOC sufficiente.<br><br><a href='https://www.formula1.com/en/latest/article/what-the-teams-said-race-day-in-japan-2026.7ljwEx0ZL2qA0lytKAwXLI' target='_blank' rel='noopener'>Fonte: Formula 1, team report Japan 2026 ↗</a>");
LESSONS_EN[0].pages.push("<span class='kicker'>Page 4 · 2026 energy case</span><br><b>Melbourne 2026: a race can be compromised before the lights even go out.</b> Mercedes stated that energy management on the formation lap left both cars with a low battery level on the grid: Russell lost a place and Antonelli fell to seventh. Russell also explained that, after taking the lead, he could have distributed his energy more intelligently to defend against the counter-attack. The pit-wall lesson is twofold: <b>(1)</b> state of charge is an initial condition to control, not a detail; <b>(2)</b> spending everything to complete an attack can leave the car vulnerable seconds later. In the game: do not enter a fight with critical SOC, and do not confuse the fastest lap with the strategically best lap.<br><br><a href='https://www.mercedesamgf1.com/reports/race-report-starting-the-new-f1-era-in-style-with-1-2-in-melbourne' target='_blank' rel='noopener'>Source: Mercedes-AMG F1, 2026 Australian race report ↗</a>");
LESSONS_EN[2].pages.push("<span class='kicker'>Page 4 · 2026 energy case</span><br><b>Suzuka 2026: the second at the Detection Line can create or break an overtaking train.</b> Ferrari observed that once a car drops beyond one second it loses Overtake and a train tends to form. In the same race Verstappen reported having no battery on the main straight while trying to pass Gasly. Other drivers described the opposite trade-off: attacking can leave you exposed immediately afterwards. The pit-wall lesson is to prepare the move over several laps: <b>recharge → enter the range → receive activation → choose where to deploy → retain a reserve against the counter-attack.</b> In the game Overtake no longer has three arbitrary uses: it unlocks only after a valid Detection Line and requires enough SOC.<br><br><a href='https://www.formula1.com/en/latest/article/what-the-teams-said-race-day-in-japan-2026.7ljwEx0ZL2qA0lytKAwXLI' target='_blank' rel='noopener'>Source: Formula 1, 2026 Japanese team report ↗</a>");

const GRID = [
 ["L. Moreau","Vulcan GP",.96],["K. Tanaka","Vulcan GP",.93],
 ["A. Beck","Sterling Racing",.95],["J. Okafor","Sterling Racing",.91],
 ["M. Rossi","Scuderia Aurora",.94],["P. Lindqvist","Scuderia Aurora",.92],
 ["D. Carvalho","Helix F1",.90],["S. Novak","Helix F1",.88],
 ["R. Iyer","Apex-Meridian",.89],["T. Dubois","Apex-Meridian",.87],
 ["C. Vega","Borealis",.86],["H. Yamato","Borealis",.85],
 ["N. Kowalski","Ravenna Corse",.85],["F. Achterberg","Ravenna Corse",.84],
 ["E. Sørensen","Kestrel",.83],["B. Mwangi","Kestrel",.82],
 ["G. Petrov","Tartarus GP",.81],["O. Reyes","Tartarus GP",.80],
 ["W. Zhang","Halcyon",.80],["I. Costa","Halcyon",.79],
];
const TEAMCOL = {"Vulcan GP":"#ff7a00","Sterling Racing":"#00d2be","Scuderia Aurora":"#e8443a","Helix F1":"#2f81f7",
 "Apex-Meridian":"#9b59b6","Borealis":"#1abc9c","Ravenna Corse":"#b03a2e","Kestrel":"#f1c40f","Tartarus GP":"#95a5a6","Halcyon":"#2ecc71"};
const PLAYER_NAME = "Tu — Scuderia Aurora #5";
const TYRES = {
 S:{pace:-0.7, deg:3.4}, M:{pace:0.0, deg:2.3}, H:{pace:0.6, deg:1.5},
 I:{pace:0, deg:2.0}, W:{pace:0, deg:1.6},
};
const POINTS = [25,18,15,12,10,8,6,4,2,1];
let career = { stratPts:0, strat:{}, voti:{} };
const STORAGE_KEY='muretto-academy-v4';
const GP_SLUGS=['australia','china','japan','bahrain','saudi-arabia','miami','canada','monaco','barcelona','austria','great-britain','belgium','hungary','netherlands','italy','spain-madrid','azerbaijan','singapore','united-states','mexico','sao-paulo','las-vegas','qatar','abu-dhabi'];
let appSettings={sound:false,hints:true,reducedMotion:false,highContrast:false};
let lastResultState=null,lastVisitedGp=null,currentLessonIndex=null,currentLessonBackTo='screen-academy',currentPreRaceIndex=null;
let routeSuppressed=false,toastTimer=null,audioCtx=null;
/* ============ i18n ============ */
let LANG = 'it';
function t(k){ const e=I18N[k]; if(e) return e[LANG] ?? e.it; const last=String(k||'').split('.').pop().replace(/[-_]/g,' '); return last ? last.charAt(0).toUpperCase()+last.slice(1) : ''; }
function setLang(l){
  LANG = l==='en'?'en':'it';
  document.documentElement.lang=LANG;
  document.querySelectorAll('[data-i18n]').forEach(el=>{ el.innerHTML = t(el.dataset.i18n); });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el=>{ el.placeholder=t(el.dataset.i18nPlaceholder); });
  document.querySelectorAll('.langbtn').forEach(b=>b.classList.toggle('sel', b.dataset.lang===LANG));
  updateSpeedInfo(); renderResumeCard(); renderGlossary(); updatePageMeta(document.querySelector('.screen.active')?.id||'screen-menu');
  const active = document.querySelector('.screen.active');
  if(active){
    const id = active.id;
    if(id==='screen-academy') openAcademy();
    else if(id==='screen-driver') renderDriverProfiles();
    else if(id==='screen-gp') openGpSelect(true);
    else if(id==='screen-race' && S) renderRace();
  }
  savePersistentState();
}
function LX(i){ return LANG==='it' ? LESSONS[i] : LESSONS_EN[i]; }
const GPN_EN = ["Australian GP","Chinese GP","Japanese GP","Bahrain GP","Saudi Arabian GP","Miami GP","Canadian GP","Monaco GP","Barcelona-Catalunya GP","Austrian GP","British GP","Belgian GP","Hungarian GP","Dutch GP","Italian GP","Spanish GP","Azerbaijan GP","Singapore GP","United States GP","Mexico City GP","São Paulo GP","Las Vegas GP","Qatar GP","Abu Dhabi GP"];
const CITY_EN = {"Gedda":"Jeddah","Città del Messico":"Mexico City","Barcellona":"Barcelona","Budapest":"Budapest"};
function gpName(i){ return LANG==='it' ? CIRCUITS[i].name : GPN_EN[i]; }
function gpCity(i){ const c=CIRCUITS[i].city; return LANG==='it'?c:(CITY_EN[c]||c); }
function tyLabel(k){ return t('ty.'+k); }

const I18N = {
 // driver profiles
 'driver.tag':{it:'Scelta pilota', en:'Driver selection'},
 'driver.h':{it:'Con chi lavorerai al muretto?', en:'Who will you work with on the pit wall?'},
 'driver.intro':{it:'Scegli un profilo comportamentale. Non cambia il talento assoluto del pilota: cambia il modo in cui esegue i tuoi target, gestisce gomme ed energia, attacca e comunica con il muretto.', en:'Choose a behavioural profile. It does not change the driver’s absolute talent: it changes how they execute your targets, manage tyres and energy, attack and communicate with the pit wall.'},
 'driver.note':{it:'I profili sono archetipi didattici, non etichette sui piloti reali. Lo stesso pilota può mostrare approcci diversi in gare e fasi di carriera differenti. Gli indicatori numerici sono valori comparativi del simulatore, non rating dei piloti citati.', en:'These profiles are teaching archetypes, not labels for real drivers. The same driver can show different approaches in different races and career phases. The numerical indicators are comparative simulator values, not ratings of the cited drivers.'},
 'driver.back':{it:'← Indietro', en:'← Back'},
 'driver.confirm':{it:'Conferma e vai al calendario →', en:'Confirm and open the calendar →'},
 'driver.none':{it:'Seleziona un profilo per continuare.', en:'Select a profile to continue.'},
 'driver.selected':{it:'Pilota selezionato: <strong>{0}</strong>', en:'Selected driver: <strong>{0}</strong>'},
 'driver.change':{it:'Cambia pilota', en:'Change driver'},
 'driver.realcase':{it:'Caso reale', en:'Real-world case'},
 'driver.source':{it:'Fonte ufficiale ↗', en:'Official source ↗'},
 'driver.stats.tyres':{it:'Gomme', en:'Tyres'},
 'driver.stats.energy':{it:'Energia', en:'Energy'},
 'driver.stats.attack':{it:'Attacco', en:'Attack'},
 'driver.stats.feedback':{it:'Feedback', en:'Feedback'},
 'driver.manager.h':{it:'Il gestore', en:'The manager'},
 'driver.manager.d':{it:'Protegge gomme, temperature e stato di carica. È ideale per stint lunghi, overcut e gare in cui il risultato si costruisce senza picchi inutili.', en:'Protects tyres, temperatures and state of charge. Ideal for long stints, overcuts and races built without unnecessary peaks.'},
 'driver.manager.trade':{it:'Punto forte: efficienza e durata. Compromesso: il giro d’attacco e il sorpasso immediato sono meno incisivi.', en:'Strength: efficiency and longevity. Trade-off: attack laps and immediate overtakes are less incisive.'},
 'driver.manager.case':{it:'Lewis Hamilton, Turchia 2020: una sola sosta e gestione magistrale delle intermedie fino alla vittoria.', en:'Lewis Hamilton, Turkey 2020: one stop and masterful management of the intermediates all the way to victory.'},
 'driver.attacker.h':{it:'L’attaccante', en:'The attacker'},
 'driver.attacker.d':{it:'Sfrutta subito grip ed energia, forza le occasioni e rende più efficace un Overtake ben preparato.', en:'Uses grip and energy immediately, forces opportunities and makes a well-prepared Overtake more effective.'},
 'driver.attacker.trade':{it:'Punto forte: sorpassi, restart e undercut. Compromesso: più usura, consumo energetico e rischio di errore o contatto.', en:'Strength: overtakes, restarts and undercuts. Trade-off: more wear, energy use and risk of error or contact.'},
 'driver.attacker.case':{it:'Max Verstappen, Brasile 2016: rimonta da P14 a P3 sul bagnato dopo la sosta tardiva, con una sequenza di sorpassi.', en:'Max Verstappen, Brazil 2016: a wet-weather charge from P14 to P3 after a late stop, built on a sequence of overtakes.'},
 'driver.metronome.h':{it:'Il metronomo', en:'The metronome'},
 'driver.metronome.d':{it:'Ripete i target con grande precisione e riduce la variabilità dei tempi. Rende affidabili previsioni, finestre pit e delta.', en:'Repeats targets with great precision and reduces lap-time variability. Makes forecasts, pit windows and deltas more reliable.'},
 'driver.metronome.trade':{it:'Punto forte: costanza ed esecuzione. Compromesso: meno improvvisazione e un picco prestazionale meno marcato.', en:'Strength: consistency and execution. Trade-off: less improvisation and a less pronounced performance peak.'},
 'driver.metronome.case':{it:'Michael Schumacher, Ungheria 1998: la strategia a tre soste richiese una lunga serie di giri da qualifica eseguiti con precisione.', en:'Michael Schumacher, Hungary 1998: the three-stop strategy required a long sequence of qualifying-style laps executed with precision.'},
 'driver.adaptive.h':{it:'L’adattivo tecnico', en:'The technical adapter'},
 'driver.adaptive.d':{it:'Legge bene grip e bilanciamento e restituisce feedback più precisi. Il vantaggio emerge quando meteo, gomme o comportamento della vettura cambiano.', en:'Reads grip and balance well and provides more precise feedback. The advantage emerges when weather, tyres or car behaviour change.'},
 'driver.adaptive.trade':{it:'Punto forte: informazioni e adattamento. Compromesso: non offre automaticamente il massimo picco di attacco o la migliore durata.', en:'Strength: information and adaptation. Trade-off: it does not automatically provide the highest attack peak or best longevity.'},
 'driver.adaptive.case':{it:'Doriane Pin, stagione F1 Academy 2025: Mercedes ha evidenziato feedback tecnico, conoscenze ingegneristiche e capacità di lavorare con il team.', en:'Doriane Pin, 2025 F1 Academy season: Mercedes highlighted her technical feedback, engineering knowledge and ability to work with the team.'},
 'driver.radio.manager':{it:'Le gomme sono sotto controllo. Possiamo allungare se serve.', en:'The tyres are under control. We can extend if needed.'},
 'driver.radio.attacker':{it:'Sono vicino. Dammi energia e provo ad attaccare.', en:'I am close. Give me energy and I will try to attack.'},
 'driver.radio.metronome':{it:'Delta stabile. Sto centrando il target.', en:'Delta stable. I am hitting the target.'},
 'driver.radio.adaptive.wear':{it:'Perdo trazione al posteriore in uscita: il degrado sta aumentando.', en:'I am losing rear traction on exit: degradation is increasing.'},
 'driver.radio.adaptive.energy':{it:'La spinta elettrica cala a fine rettilineo. Controlliamo il SOC.', en:'Electrical deployment is fading at the end of the straight. Check the SOC.'},
 'driver.radio.adaptive.grip':{it:'Il grip sta cambiando: la pista non è uniforme, soprattutto in frenata.', en:'Grip is changing: the track is inconsistent, especially under braking.'},
 'driver.radio.adaptive.ok':{it:'Bilanciamento leggibile. Posso seguire il target attuale.', en:'The balance is readable. I can follow the current target.'},
 'driver.start':{it:'Profilo pilota: {0}. Adattiamo ritmo, energia e comunicazioni alle sue caratteristiche.', en:'Driver profile: {0}. We will adapt pace, energy and communication to their characteristics.'},
 // menu / static
 'menu.tag':{it:'Stagione 2026 · 24 Gran Premi · Solo strategia', en:'2026 Season · 24 Grands Prix · Strategy only'},
 'menu.title':{it:'Muretto · Accademia', en:'Pit Wall · Academy'},
 'menu.sub':{it:"Impara la strategia di Formula 1 dai casi realmente accaduti. Ogni GP ha un dossier storico, un quiz e poi la gara: meteo, neutralizzazioni, gomme, batteria, Detection Line e Overtake Mode. Puoi farla durare 10 minuti o quanto una gara vera.", en:"Learn Formula 1 strategy from real cases. Every GP has a historical dossier, a quiz and then the race: weather, neutralisations, tyres, battery, Detection Line and Overtake Mode. Make it last 10 minutes or as long as a real race."},
 'rules.h':{it:'Come si gioca', en:'How to play'},
 'rules.intro':{it:'Sei lo stratega al muretto: le decisioni prese giro dopo giro determinano il risultato.', en:'You are the pit-wall strategist: every lap-by-lap decision shapes the result.'},
 'rules.1h':{it:'1 · Preparati', en:'1 · Get ready'},
 'rules.1p':{it:'Scegli un GP, leggi il dossier storico, rispondi al quiz e seleziona la gomma di partenza.', en:'Choose a GP, read the historical dossier, answer the quiz and select your starting tyre.'},
 'rules.2h':{it:'2 · Parti in tempo reale', en:'2 · Start at real speed'},
 'rules.2p':{it:'La gara comincia sempre a velocità reale. Dopo lo spegnimento dei semafori puoi mantenerla oppure accelerarla.', en:'Every race begins at real speed. Once the lights go out, you can keep it there or speed it up.'},
 'rules.3h':{it:'3 · Gestisci la gara', en:'3 · Manage the race'},
 'rules.3p':{it:'Controlla ritmo, usura, meteo, SOC batteria e gap alla Detection Line; programma pit stop e deployment e reagisci alle neutralizzazioni.', en:'Manage pace, tyre wear, weather, battery SOC and the Detection Line gap; plan pit stops and deployment and react to neutralisations.'},
 'rules.4h':{it:'4 · Rispetta le regole', en:'4 · Follow the rules'},
 'rules.4p':{it:'In una gara asciutta usa almeno due mescole slick diverse, segui le regole speciali del GP e punta al voto finale più alto.', en:'In a dry race, use at least two different slick compounds, follow each GP’s special rules and aim for the highest final grade.'},
 'mode1.h':{it:'Carriera Stratega', en:'Strategist Career'},
 'mode1.p':{it:'I 24 GP in ordine. Dossier storico, quiz, gara completa con tutte le variabili e pagella finale del muretto con voto.', en:'All 24 GPs in order. Historical dossier, quiz, full race with every variable and a graded pit-wall report card at the end.'},
 'mode2.h':{it:'Accademia', en:'Academy'},
 'mode2.p':{it:"Formazione tecnica prima della gara: modulo su batteria, Detection Line e Overtake, più 24 dossier completi con casi storici e diagrammi strategici.", en:"Technical learning before the race: a battery, Detection Line and Overtake module, plus 24 full historical dossiers and strategy diagrams."},
 'footer':{it:'La carriera resta in memoria finché tieni aperta questa scheda.', en:'Your career is kept in memory while this tab stays open.'},
 'acad.tag':{it:'Accademia', en:'Academy'},
 'acad.h':{it:'Moduli e dossier di strategia', en:'Strategy modules and dossiers'},
 'acad.dossiers.h':{it:'Dossier dei Gran Premi', en:'Grand Prix dossiers'},
 'acad.dossiers.p':{it:'Apri uno dei 24 casi storici per studiare contesto, decisioni del muretto, conseguenze e principi trasferibili alla simulazione.', en:'Open one of the 24 historical cases to study context, pit-wall decisions, consequences and principles you can transfer into the simulation.'},
 'btn.menu':{it:'← Menu', en:'← Menu'},
 'career.tag':{it:'Carriera Stratega', en:'Strategist Career'},
 'career.h':{it:'Calendario 2026', en:'2026 Calendar'},
 'pts.career':{it:'Punti carriera: ', en:'Career points: '},
 'dossier.3p':{it:'📖 Dossier completo', en:'📖 Full dossier'},
 'laps.u':{it:'GIRI', en:'LAPS'},
 // race static
 'spd.lbl':{it:'VELOCITÀ', en:'SPEED'},
 'spd.rapida':{it:'Rapida', en:'Fast'},'spd.tv':{it:'TV', en:'TV'},'spd.estesa':{it:'Estesa', en:'Extended'},'spd.reale':{it:'⏱ Reale', en:'⏱ Real'},
 'spd.locked':{it:'Partenza reale · velocità sbloccate dopo il via', en:'Real-speed start · faster modes unlock after lights out'},
 'spd.realinfo':{it:'≈ 90 min per la gara', en:'≈ 90 min for the race'},
 'btn.pause':{it:'⏸ Pausa', en:'⏸ Pause'},'btn.resume':{it:'▶ Riprendi', en:'▶ Resume'},
 'start.gridtag':{it:'GRIGLIA DI PARTENZA', en:'STARTING GRID'},
 'start.ready':{it:'Pronto in griglia', en:'Ready on the grid'},
 'start.sub':{it:'La strategia è caricata. Avvia la sequenza ufficiale dei semafori quando sei pronto.', en:'The strategy is loaded. Start the official light sequence when you are ready.'},
 'start.button':{it:'AVVIA LA GARA', en:'START RACE'},
 'start.hold':{it:'ATTENDI I SEMAFORI', en:'WATCH THE LIGHTS'},
 'start.out':{it:'VIA!', en:'LIGHTS OUT!'},
 'start.wait':{it:'⏳ In attesa del via', en:'⏳ Waiting for start'},
 'st.grid':{it:'IN GRIGLIA', en:'ON THE GRID'},
 'btn.lap':{it:'Giro ▶', en:'Lap ▶'},'btn.retire':{it:'Ritiro', en:'Retire'},
 'red.head':{it:'🟥 BANDIERA ROSSA — gara sospesa.', en:'🟥 RED FLAG — race suspended.'},
 'red.sub':{it:'Cambio gomme gratuito consentito: scegli la mescola per la ripartenza da fermo, poi premi Riprendi.', en:'Free tyre change allowed: pick a compound for the standing restart, then press Resume.'},
 'red.resume':{it:'RIPRENDI LA GARA →', en:'RESUME THE RACE →'},
 'red.none':{it:'Nessuna gomma nuova scelta: riparti con le attuali.', en:'No new tyre chosen: you restart on your current set.'},
 'red.chosen':{it:'Gomma scelta per la ripartenza: ', en:'Tyre chosen for the restart: '},
 'red.free':{it:' (gratis).', en:' (free).'},
 'pan.tower':{it:'Torre dei tempi', en:'Timing tower'},
 'pan.track':{it:'Circuito live', en:'Live track'},
 'pan.car':{it:'La tua monoposto — telemetria', en:'Your car — telemetry'},
 'pan.fia':{it:'📺 Monitor — Direzione gara', en:'📺 Monitor — Race control'},
 'pan.radio':{it:'📻 Team radio', en:'📻 Team radio'},
 'lbl.tyre':{it:'Gomma:', en:'Tyre:'},
 'lbl.wear':{it:'Usura', en:'Wear'},
 'pace.push':{it:'🔥 Spingi', en:'🔥 Push'},'pace.norm':{it:'⚖️ Normale', en:'⚖️ Neutral'},'pace.save':{it:'🛡️ Gestisci', en:'🛡️ Conserve'},
 'chart.cap':{it:'I tuoi tempi sul giro, colorati per mescola. ▲ = pit stop.', en:'Your lap times, coloured by compound. ▲ = pit stop.'},
 'stint':{it:'stint', en:'stint'},'stint.laps':{it:'giri', en:'laps'},
 'ok.all':{it:'tutto OK', en:'all OK'},
 'x.cold':{it:'🧊 gomme fredde', en:'🧊 cold tyres'},'x.dmg':{it:'🔧 ala danneggiata', en:'🔧 wing damage'},'x.pen':{it:'⏱ +{0}s penalità', en:'⏱ +{0}s penalty'},
 'energy.lab.h':{it:'Modulo Academy · Batteria, Detection Line e Overtake', en:'Academy module · Battery, Detection Line and Overtake'},
 'energy.lab.intro':{it:'Studia il ciclo decisionale del muretto: costruire carica, portare il pilota entro il gap alla Detection Line, confermare via radio l’Overtake attivo e scegliere quando impiegare energia senza restare esposti al contrattacco.', en:'Study the pit-wall decision cycle: build charge, bring the driver inside the Detection Line gap, confirm by radio that Overtake is active, and choose when to deploy without becoming exposed to a counter-attack.'},
 'energy.case.au.h':{it:'Melbourne 2026 · Batteria bassa in griglia', en:'Melbourne 2026 · Low battery on the grid'},
 'energy.case.au.p':{it:'Mercedes gestì male l’energia nel giro di formazione: entrambe le vetture arrivarono al via con poca carica e persero posizioni. Russell spiegò anche che un uso più intelligente dell’energia gli avrebbe permesso di difendersi meglio.', en:'Mercedes mishandled energy on the formation lap: both cars reached the start with low charge and lost positions. Russell also said smarter energy use would have helped him defend.'},
 'energy.case.jp.h':{it:'Suzuka 2026 · Range, trenini e batteria vuota', en:'Suzuka 2026 · Range, trains and an empty battery'},
 'energy.case.jp.p':{it:'Fuori dal secondo si perde l’Overtake e il traffico tende a compattarsi; Verstappen riferì di non avere batteria sul rettilineo principale durante un tentativo di sorpasso. La carica disponibile e il momento del deployment diventano quindi parte della strategia.', en:'Beyond one second a car loses Overtake and traffic tends to bunch into trains; Verstappen reported having no battery on the main straight during an overtaking attempt. Available charge and deployment timing therefore become strategic variables.'},
 'energy.source':{it:'Fonte ufficiale ↗', en:'Official source ↗'},
 'energy.lab.note':{it:'Nel simulatore i principi regolamentari sono reali; i coefficienti di tempo, carica e usura sono calibrazioni didattiche, perché le mappe energetiche dei team non sono pubbliche.', en:'The simulator uses real regulatory principles; time, charge and wear coefficients are teaching calibrations because team energy maps are not public.'},
 'energy.h':{it:'Strategia energia', en:'Energy strategy'},'energy.soc':{it:'SOC batteria', en:'Battery SOC'},
 'energy.recharge':{it:'♻️ Ricarica', en:'♻️ Recharge'},'energy.balanced':{it:'⚖️ Bilanciata', en:'⚖️ Balanced'},'energy.deploy':{it:'⚡ Deployment', en:'⚡ Deployment'},
 'energy.mode.recharge':{it:'Ricarica: più recupero, giro più lento', en:'Recharge: more harvesting, slower lap'},
 'energy.mode.balanced':{it:'Bilanciata: consumo e recupero in equilibrio', en:'Balanced: deployment and harvesting in balance'},
 'energy.mode.deploy':{it:'Deployment: più prestazione, SOC in calo', en:'Deployment: more performance, falling SOC'},
 'energy.track':{it:'Recupero {0} · Rettilinei {1} · Trazione {2}', en:'Harvest {0} · Straights {1} · Traction {2}'},
 'energy.low':{it:'basso', en:'low'},'energy.med':{it:'medio', en:'medium'},'energy.high':{it:'alto', en:'high'},
 'energy.hint':{it:'Ricarica costa tempo ma prepara l’attacco; Deployment migliora il giro ma scarica la batteria. L’usura extra compare soprattutto con tanta coppia in trazione, gomme calde o poco grip: non esiste una conversione fissa batteria → usura.', en:'Recharge costs lap time but prepares an attack; Deployment improves the lap but drains the battery. Extra tyre wear appears mainly with high torque in traction, hot tyres or low grip: there is no fixed battery-to-wear conversion.'},
 'ot.call':{it:'📻 CHIAMA OVERTAKE', en:'📻 CALL OVERTAKE'},
 'ot.off':{it:'OVERTAKE NON ATTIVO', en:'OVERTAKE NOT ACTIVE'},'ot.active':{it:'OVERTAKE ATTIVO QUESTO GIRO', en:'OVERTAKE ACTIVE THIS LAP'},
 'ot.armed':{it:'OVERTAKE ARMATO', en:'OVERTAKE ARMED'},'ot.leader':{it:'Sei leader: nessuna vettura da attaccare.', en:'You are the leader: no car to attack.'},
 'ot.start':{it:'Disattivato al via: prima Detection Line da completare.', en:'Disabled at the start: complete the first Detection Line.'},
 'ot.sc':{it:'Disattivato durante neutralizzazione.', en:'Disabled during a neutralisation.'},
 'ot.range':{it:'Gap alla Detection Line: {0}s. Attivazione valida.', en:'Detection Line gap: {0}s. Activation valid.'},
 'ot.near':{it:'Gap {0}s: servono altri {1}s per entrare nel range.', en:'Gap {0}s: find another {1}s to enter the range.'},
 'ot.far':{it:'Gap alla Detection Line: {0}s. Serve ≤ 1,0s.', en:'Detection Line gap: {0}s. Need ≤ 1.0s.'},
 'ot.low':{it:'Attivo, ma SOC insufficiente: ricarica prima di chiamarlo.', en:'Active, but SOC is insufficient: recharge before calling it.'},
 'r.otqual':{it:'Detection Line: gap {0}s. Overtake attivo nel prossimo giro; SOC {1}%.', en:'Detection Line: gap {0}s. Overtake active next lap; SOC {1}%.'},
 'r.otlost':{it:'Gap {0}s: fuori dal range Overtake. Serve recuperare {1}s prima della prossima Detection Line.', en:'Gap {0}s: outside Overtake range. Find {1}s before the next Detection Line.'},
 'r.otnoenergy':{it:'Overtake disponibile ma batteria troppo bassa. Prima ricarichiamo.', en:'Overtake is available but the battery is too low. Recharge first.'},
 'r.energycrit':{it:'SOC critico: stiamo andando in clipping. Passa a Ricarica o Bilanciata.', en:'Critical SOC: we are clipping. Switch to Recharge or Balanced.'},
 'r.energycall':{it:'Modalità energia: {0}.', en:'Energy mode: {0}.'},
 'x.batt':{it:'🔋 SOC critico', en:'🔋 critical SOC'},
 // status / weather
 'st.green':{it:'Bandiera verde', en:'Green flag'},'st.sc':{it:'SAFETY CAR', en:'SAFETY CAR'},'st.vsc':{it:'VIRTUAL SC', en:'VIRTUAL SC'},
 'st.rain1':{it:'Pioggia leggera', en:'Light rain'},'st.rain2':{it:'Pioggia forte', en:'Heavy rain'},'st.red':{it:'BANDIERA ROSSA', en:'RED FLAG'},
 'wx.dry':{it:'☀️ <b>Asciutto</b>', en:'☀️ <b>Dry</b>'},'wx.r1':{it:'🌦️ <b>Pioggia leggera</b>', en:'🌦️ <b>Light rain</b>'},'wx.r2':{it:'⛈️ <b>Pioggia forte</b>', en:'⛈️ <b>Heavy rain</b>'},
 'wx.none':{it:'Radar: nessuna perturbazione nei prossimi 10 giri.', en:'Radar: nothing incoming in the next 10 laps.'},
 'wx.inc':{it:'Radar: {0} in arrivo tra ~{1} giri.', en:'Radar: {0} expected in ~{1} laps.'},
 'wx.better':{it:'Radar: in miglioramento tra ~{0} giri.', en:'Radar: improving in ~{0} laps.'},
 'wx.rain':{it:'pioggia', en:'rain'},'wx.heavy':{it:'pioggia forte', en:'heavy rain'},
 'wx.track':{it:'Asfalto', en:'Track'},
 'gap.leader':{it:'Leader', en:'Leader'},
 // tyres
 'ty.S':{it:'Soft', en:'Soft'},'ty.M':{it:'Media', en:'Medium'},'ty.H':{it:'Dura', en:'Hard'},'ty.I':{it:'Intermedia', en:'Intermediate'},'ty.W':{it:'Full wet', en:'Full wet'},
 // pre-race
 'pre.round':{it:'Round {0} · {1}', en:'Round {0} · {1}'},
 'pre.case':{it:'Caso reale — ', en:'Real case — '},
 'pre.lesson':{it:'🎓 <b>Insegnamento:</b> ', en:'🎓 <b>The lesson:</b> '},
 'pre.dossier':{it:'📖 Leggi il dossier completo (3 pagine + diagramma)', en:'📖 Read the full dossier (3 pages + diagram)'},
 'pre.quizh':{it:'Quiz del muretto — dimostra di aver capito', en:'Pit-wall quiz — show you got it'},
 'pre.brief':{it:'Briefing &amp; gomma di partenza', en:'Briefing &amp; starting tyre'},
 'pre.right':{it:'✅ <b>Esatto.</b> ', en:'✅ <b>Correct.</b> '},
 'pre.wrong':{it:'❌ <b>Non proprio.</b> ', en:'❌ <b>Not quite.</b> '},
 'pre.now':{it:'<br><br>Ora applicalo in gara: scegli la gomma di partenza qui sotto.', en:'<br><br>Now apply it in the race: pick your starting tyre below.'},
 'pre.back':{it:'← Calendario', en:'← Calendar'},
 'pre.specialQ':{it:'<br>⚠️ <b>Regola speciale di questo GP:</b> massimo {0} giri per ogni treno di gomme slick.', en:'<br>⚠️ <b>Special rule this GP:</b> max {0} laps per set of slick tyres.'},
 'pre.specialC':{it:'<br>⚠️ <b>Condizione speciale:</b> asfalto gelido — la gomma Dura sarà fuori finestra (più lenta del normale).', en:'<br>⚠️ <b>Special condition:</b> freezing track — the Hard tyre will be out of its window (slower than usual).'},
 'pre.line':{it:'{0} giri · Temperatura attesa {1}°C · Probabilità pioggia: <b>{2}%</b> · Usura: {3} · Pit loss ≈ {4}s · Sorpassi: {5}. Partirai intorno a metà schieramento. In gara asciutta servono almeno 2 mescole slick diverse. L’Overtake si attiva soltanto se sei entro 1,0 s alla Detection Line e hai energia disponibile.',
   en:'{0} laps · Expected temperature {1}°C · Rain probability: <b>{2}%</b> · Degradation: {3} · Pit loss ≈ {4}s · Overtaking: {5}. You will start around mid-grid. In a dry race you must use at least 2 different slick compounds. Overtake activates only if you are within 1.0s at the Detection Line and have energy available.'},
 'deg.vh':{it:'molto alta', en:'very high'},'deg.h':{it:'media-alta', en:'medium-high'},'deg.l':{it:'bassa', en:'low'},
 'ot.no':{it:'quasi impossibili', en:'nearly impossible'},'ot.hard':{it:'difficili', en:'hard'},'ot.ok':{it:'fattibili', en:'doable'},
 // lesson viewer
 'lv.tag':{it:'Dossier R{0} · ', en:'Dossier R{0} · '},
 'lv.p1':{it:'1 · Contesto', en:'1 · Context'},'lv.p2':{it:'2 · La cronaca', en:'2 · The race'},'lv.p3':{it:'3 · Analisi del muretto', en:'3 · Pit-wall analysis'},'lv.p4':{it:'4 · Caso energia 2026', en:'4 · 2026 energy case'},
 'lv.prev':{it:'← Pagina prec.', en:'← Prev page'},'lv.next':{it:'Pagina succ. →', en:'Next page →'},
 'lv.gogp':{it:'🎧 Vai al GP e applica la lezione', en:'🎧 Go to the GP and apply the lesson'},
 'lv.back':{it:'← Indietro', en:'← Back'},
 // results
 'res.tag':{it:'Bandiera a scacchi', en:'Chequered flag'},
 'res.dnf':{it:'DNF', en:'DNF'},
 'res.pts':{it:'· +{0} punti', en:'· +{0} points'},
 'res.v.dnf':{it:'Ritiro. Capita anche ai migliori muretti.', en:'Retirement. It happens to the best pit walls too.'},
 'res.v.win':{it:'🏆 VITTORIA! Strategia da manuale.', en:'🏆 VICTORY! Textbook strategy.'},
 'res.v.podium':{it:'🍾 Podio! Il team festeggia.', en:'🍾 Podium! The team celebrates.'},
 'res.v.pts':{it:'Punti preziosi portati a casa.', en:'Valuable points in the bag.'},
 'res.v.none':{it:'Fuori dai punti: la pagella ti dice dove migliorare.', en:'Out of the points: the report card shows where to improve.'},
 'res.pagella':{it:'Pagella del muretto', en:'Pit-wall report card'},
 'res.cal':{it:'Calendario →', en:'Calendar →'},
 'res.retry':{it:'Riprova questo GP', en:'Retry this GP'},
 'res.reread':{it:'📖 Rileggi il dossier', en:'📖 Re-read the dossier'},
 'res.penTL':{it:'⏱ +{0}s di penalità (track limits) applicati.', en:'⏱ +{0}s penalty (track limits) applied.'},
 'res.pen2c':{it:'⚠️ +25s: non hai usato due mescole slick diverse in gara asciutta.', en:'⚠️ +25s: you did not use two different slick compounds in a dry race.'},
 // pagella items
 'pg.quiz':{it:'Quiz pre-gara', en:'Pre-race quiz'},
 'pg.quiz.ok':{it:'Risposta corretta al primo colpo.', en:'Correct answer first time.'},
 'pg.quiz.ko':{it:'Risposta sbagliata: rileggi il dossier.', en:'Wrong answer: re-read the dossier.'},
 'pg.quiz.skip':{it:'Quiz saltato.', en:'Quiz skipped.'},
 'pg.rain':{it:'Reazione alla pioggia', en:'Rain reaction'},
 'pg.rain.ok':{it:'Hai cambiato gomme entro 2 giri: da manuale (Zandvoort 2023 docet).', en:'You switched tyres within 2 laps: textbook (see Zandvoort 2023).'},
 'pg.rain.ko':{it:'Hai girato {0} giri su slick sotto la pioggia: ~10s persi a giro e rischio testacoda.', en:'You did {0} laps on slicks in the rain: ~10s lost per lap plus spin risk.'},
 'pg.wear':{it:'Gestione usura', en:'Tyre management'},
 'pg.wear.ok':{it:'Mai oltre l’orlo del cliff: Silverstone 2020 ti ha insegnato qualcosa.', en:'Never over the edge of the cliff: Silverstone 2020 taught you something.'},
 'pg.wear.ko':{it:'Hai girato {0} giri oltre l’85% di usura: stavi flirtando con il cedimento.', en:'You did {0} laps beyond 85% wear: flirting with a failure.'},
 'pg.sc':{it:'Uso delle neutralizzazioni', en:'Use of neutralisations'},
 'pg.sc.ok':{it:'Neutralizzazione sfruttata (sosta scontata o già fatta): Monza 2020 style.', en:'Neutralisation cashed in (discounted stop or already covered): Monza 2020 style.'},
 'pg.sc.ko':{it:'SC/VSC sprecata: era l’occasione per una sosta quasi gratis.', en:'SC/VSC wasted: that was a near-free pit stop.'},
 'pg.disc':{it:'Disciplina', en:'Discipline'},
 'pg.disc.ko':{it:'Penalità per track limits: +{0}s. Spingere ha un prezzo.', en:'Track-limits penalty: +{0}s. Pushing has a price.'},
 'pg.2c':{it:'Regola delle due mescole', en:'Two-compound rule'},
 'pg.2c.ok':{it:'Rispettata.', en:'Respected.'},
 'pg.2c.ko':{it:'Violata: 25 secondi buttati.', en:'Broken: 25 seconds thrown away.'},
 'pg.energy':{it:'Gestione batteria', en:'Battery management'},
 'pg.energy.ok':{it:'SOC sotto controllo: nessun clipping strategicamente grave.', en:'SOC under control: no strategically serious clipping.'},
 'pg.energy.ko':{it:'Sei rimasto senza energia utile in {0} giri: l’attacco non era preparato.', en:'You ran short of usable energy on {0} laps: the attack was not prepared.'},
 'pg.ot':{it:'Preparazione Overtake', en:'Overtake preparation'},
 'pg.ot.ok':{it:'Hai usato {0} opportunità su {1} attivazioni senza presentarti scarico.', en:'You used {0} opportunities from {1} activations without arriving empty.'},
 'pg.ot.ko':{it:'Hai sprecato {0} attivazioni per SOC insufficiente.', en:'You wasted {0} activations through insufficient SOC.'},
 'pg.les':{it:'📚 Lezione del GP: ', en:'📚 Lesson of the GP: '},
 // lesson checks
 'lc.rain.ok':{it:'Pioggia gestita con decisione immediata.', en:'Rain handled with immediate commitment.'},
 'lc.rain.ko':{it:'Hai esitato sotto la pioggia: proprio l’errore del caso storico.', en:'You hesitated in the rain: exactly the error of the historical case.'},
 'lc.rain.na':{it:'Niente pioggia stavolta: lezione non testata, ma eri pronto?', en:'No rain this time: lesson untested — but were you ready?'},
 'lc.sc.ok':{it:'Neutralizzazione capitalizzata come da lezione.', en:'Neutralisation capitalised, as per the lesson.'},
 'lc.sc.ko':{it:'La neutralizzazione è arrivata e non l’hai usata: rileggi il dossier.', en:'The neutralisation came and you did not use it: re-read the dossier.'},
 'lc.sc.na':{it:'Nessuna neutralizzazione stavolta: ma il piano la prevedeva?', en:'No neutralisation this time: but did your plan allow for one?'},
 'lc.cliff.ok':{it:'Mai un giro di troppo sulla gomma morta.', en:'Never a lap too many on a dead tyre.'},
 'lc.cliff.ko':{it:'Hai superato il limite della gomma: il “giro di troppo” del caso storico.', en:'You went past the tyre’s limit: the “one lap too many” of the historical case.'},
 'lc.tp.ok':{it:'Soste al minimo: posizione in pista protetta.', en:'Minimum stops: track position protected.'},
 'lc.tp.ko':{it:'Troppe soste per questa pista: qui la posizione vale più della gomma.', en:'Too many stops for this track: here position is worth more than rubber.'},
 'lc.uc.ok':{it:'Da P{0} a P{1}: l’offset di strategia ha pagato.', en:'From P{0} to P{1}: the strategy offset paid off.'},
 'lc.uc.ko':{it:'Non hai guadagnato posizioni: prova ad anticipare o ritardare la sosta rispetto ai rivali.', en:'You gained no positions: try stopping earlier or later than your rivals.'},
 'lc.sm.ok':{it:'Numero di soste sensato per il degrado reale.', en:'A sensible stop count for the real degradation.'},
 'lc.sm.ko':{it:'Conta meglio: ogni sosta vale ~20s, il guadagno deve superarli.', en:'Do the maths: each stop costs ~20s, the gain must beat it.'},
 'lc.ge.ok':{it:'Nessun azzardo cieco nel finale.', en:'No blind gamble at the end.'},
 'lc.ge.ko':{it:'Sei rimasto su slick nella pioggia: l’errore di Glock 2008.', en:'You stayed on slicks in the rain: Glock’s 2008 mistake.'},
 'lc.ge.na':{it:'Meteo stabile: azzardo non richiesto.', en:'Stable weather: no gamble required.'},
 'lc.cold.ok':{it:'Gomme tenute in finestra nonostante il freddo.', en:'Tyres kept in their window despite the cold.'},
 'lc.cold.ko':{it:'Gomme maltrattate su asfalto freddo.', en:'Tyres mistreated on a freezing track.'},
 'lc.flex.ok':{it:'Flessibilità dimostrata su pista sconosciuta.', en:'Flexibility shown on an unknown track.'},
 'lc.flex.ko':{it:'Su pista nuova serve più elasticità di piano.', en:'A new track demands a more elastic plan.'},
};
/* messaggi dinamici radio/FIA */
Object.assign(I18N, {
 'r.start':{it:'Si parte, P{0} su {1}. La lezione di oggi: {2}', en:'Lights out, P{0} on {1}s. Today’s lesson: {2}'},
 'r.driver0':{it:'Ok ragazzi, sensazioni buone. Datemi i distacchi ogni due giri.', en:'Okay guys, car feels good. Give me the gaps every two laps.'},
 'r.maxstint':{it:'Regola speciale: massimo {0} giri per treno di slick. Pianifica le finestre!', en:'Special rule: max {0} laps per slick set. Plan your windows!'},
 'r.wetslick':{it:'Pista bagnata e tu su slick: rischio altissimo.', en:'Wet track and you are on slicks: huge risk.'},
 'r.window':{it:'Finestra pit prevista: giri {0}–{1}.', en:'Expected pit window: laps {0}–{1}.'},
 'f.green':{it:'Semaforo verde. Pista dichiarata {0}. DRS abilitato dal giro 3.', en:'Race start. Track declared {0}. DRS enabled from lap 3.'},
 'f.dry':{it:'asciutta', en:'dry'},'f.wet':{it:'bagnata', en:'wet'},
 'f.lap':{it:'FIA · giro {0}:', en:'FIA · lap {0}:'},
 'r.rainstart2':{it:'Piove forte! Pista bagnata!', en:'Heavy rain! Track is wet!'},
 'r.rainstart1':{it:'Inizia a piovere, gocce sulla visiera.', en:'Rain starting, drops on the visor.'},
 'f.rain':{it:'Pioggia segnalata in più settori.', en:'Rain reported in several sectors.'},
 'r.rainup':{it:'La pioggia si intensifica: serve la full wet?', en:'Rain getting heavier: do we need the full wet?'},
 'r.drying':{it:'Smette di piovere, si asciuga una traiettoria.', en:'Rain stopping, a dry line is forming.'},
 'f.improve':{it:'Pista in miglioramento.', en:'Track improving.'},
 'f.flavor':{it:['Track limits: avvisi a diversi piloti in curva 9.','Detriti segnalati, marshal in azione.','Vento in aumento sul rettilineo principale.','Investigazione: partenza anticipata sospetta, nessuna azione.','Doppia bandiera gialla momentanea nel settore 2, rientrata.'],
   en:['Track limits: warnings issued to several drivers at turn 9.','Debris reported, marshals deployed.','Wind picking up on the main straight.','Investigation: suspected jump start, no further action.','Brief double yellow in sector 2, now clear.']},
 'f.tlwarn':{it:'Track limits: avviso {0}/3 alla vettura #5 (TU).', en:'Track limits: warning {0}/3 for car #5 (YOU).'},
 'r.tlwarn':{it:'Occhio ai track limits, sei a {0}/3.', en:'Watch the track limits, you are at {0}/3.'},
 'f.tlpen':{it:'PENALITÀ: +5s alla vettura #5 (TU) per track limits.', en:'PENALTY: +5s for car #5 (YOU), track limits.'},
 'r.tlpen':{it:'5 secondi di penalità, track limits. Li sconteremo a fine gara.', en:'Five-second penalty, track limits. We will serve it at the end.'},
 'f.sc':{it:'🚨 SAFETY CAR. Incidente alla curva {0}, vettura ferma in zona pericolosa.', en:'🚨 SAFETY CAR. Incident at turn {0}, car stopped in a dangerous position.'},
 'r.sc':{it:'SC! La sosta ora costa la metà. Decidi in fretta.', en:'SC! A stop costs half price now. Decide fast.'},
 'f.vsc':{it:'🟡 VIRTUAL SAFETY CAR: detriti in pista. Delta positivo obbligatorio.', en:'🟡 VIRTUAL SAFETY CAR: debris on track. Positive delta mandatory.'},
 'r.vsc':{it:'VSC! Sosta a prezzo ridotto (−30%), ma il gruppo non si compatta.', en:'VSC! Discounted stop (−30%), but the pack does not bunch up.'},
 'f.scin':{it:'Safety car rientra in questo giro. Ripartenza!', en:'Safety car in this lap. Restart!'},
 'r.scin':{it:'SC rientra, ripartenza! Gomme in temperatura.', en:'SC is coming in, restart! Get heat in the tyres.'},
 'f.vscend':{it:'Fine Virtual Safety Car. Pista verde.', en:'Virtual Safety Car ending. Track green.'},
 'r.wall':{it:'NO NO NO… sei a muro. Gara finita.', en:'NO NO NO… you are in the wall. Race over.'},
 'f.crash':{it:'{0} a muro: vettura ritirata.', en:'{0} in the wall: car retired.'},
 'r.spin':{it:'Testacoda! Non si guida su queste gomme!', en:'Spin! These tyres are undriveable!'},
 'r.contact':{it:'Contatto! Ho danni all’ala anteriore, la macchina sottosterza.', en:'Contact! Front wing damage, the car is understeering.'},
 'f.contact':{it:'Contatto in mischia: vettura #5 (TU) con danno all’ala. Nessuna investigazione.', en:'Contact in the pack: car #5 (YOU) with wing damage. No investigation.'},
 'f.tech':{it:'{0}: problema tecnico, ritiro.', en:'{0}: technical issue, retired.'},
 'r.pu':{it:'Spegni tutto, problema power unit. Che sfortuna.', en:'Shut it all down, power unit failure. So unlucky.'},
 'r.cliffwarn':{it:'Gomme al limite: ricorda Silverstone 2020. Valuta il pit.', en:'Tyres on the limit: remember Silverstone 2020. Consider boxing.'},
 'r.maxwarn':{it:'⚠️ Oltre il limite di {0} giri per treno! La gomma sta cedendo: BOX!', en:'⚠️ Past the {0}-lap set limit! The tyre is failing: BOX!'},
 'r.maxsoon':{it:'Limite stint tra 2 giri: prepara la sosta.', en:'Stint limit in 2 laps: get ready to box.'},
 'r.boxarm':{it:'Box box, monto {0}.', en:'Box box, fitting {0}s.'},
 'r.stayout':{it:'Ricevuto, stay out.', en:'Copy, stay out.'},
 'r.pitdone':{it:'Pit eseguito: {0}, persi {1}s.{2} Occhio: 2 giri di gomme fredde.', en:'Stop complete: {0}s on, {1}s lost.{2} Careful: 2 laps of cold tyres.'},
 'r.pitsc':{it:' Sosta in SC: metà prezzo!', en:' Stop under SC: half price!'},
 'r.pitvsc':{it:' Sosta in VSC: −30%!', en:' Stop under VSC: −30%!'},
 'r.wing':{it:'Ala sostituita (+3s) e gomme nuove.', en:'New nose fitted (+3s) and fresh tyres.'},
 'r.atk':{it:'Overtake confermato. Uso l’energia adesso!', en:'Overtake confirmed. Deploying the energy now!'},
 'f.red':{it:'🟥 BANDIERA ROSSA. Gara sospesa, vetture in corsia box. Cambio gomme consentito.', en:'🟥 RED FLAG. Race suspended, cars to the pit lane. Tyre change permitted.'},
 'r.red':{it:'Bandiera rossa! Cambio gomme GRATIS: scegli la mescola per la ripartenza.', en:'Red flag! FREE tyre change: pick a compound for the restart.'},
 'r.rednew':{it:'Gomme nuove montate in griglia. Ripartenza da fermo!', en:'Fresh tyres fitted on the grid. Standing restart!'},
 'r.redold':{it:'Ripartiamo con le gomme vecchie. Coraggioso…', en:'Restarting on the old tyres. Brave…'},
 'f.redgo':{it:'Ripartenza da fermo. Procedura di partenza standard.', en:'Standing restart. Standard start procedure.'},
 'who.eng':{it:'Ingegnere', en:'Engineer'},'who.drv':{it:'Pilota', en:'Driver'},'who.you':{it:'Tu', en:'You'},
 'chat.ok':{it:["Macchina bilanciata, posso spingere se serve.","Il passo è buono, gestiamo così.","Siamo vicini al range Overtake, ditemi il gap.","Bel ritmo, ditemi voi quando attaccare."],
   en:["Car is balanced, I can push if needed.","Pace is good, let’s manage like this.","We are close to Overtake range, give me the gap.","Nice rhythm, tell me when to attack."]},
 'chat.wear':{it:["Le gomme iniziano ad andare, sento l'anteriore.","Sto perdendo il posteriore in trazione, quanto manca al pit?","Queste gomme sono cotte, ragazzi.","Vibrazioni sul rettilineo, gomma a fine vita."],
   en:["Tyres are starting to go, I can feel the front.","Losing the rear on traction, how long to the stop?","These tyres are cooked, guys.","Vibrations on the straight, this set is done."]},
 'chat.rain':{it:["Sta arrivando giù forte, non tengo la macchina!","Aquaplaning in curva 3, attenzione!","Datemi le inter appena potete!","Non vedo NIENTE nella scia."],
   en:["It’s coming down hard, I can’t hold the car!","Aquaplaning at turn 3, careful!","Give me inters as soon as you can!","I can see NOTHING in the spray."]},
 'chat.cold':{it:["Le gomme non si accendono, scivolo ovunque.","Mi serve un giro in più per scaldarle, pazienza."],
   en:["The tyres won’t switch on, I’m sliding everywhere.","I need an extra lap to warm them up, bear with me."]},
 'chat.sc':{it:["Occhio, gruppo compatto alla ripartenza: posso giocarmela.","Ripartenza: gomme in temperatura, sono pronto."],
   en:["Pack is bunched for the restart: I can make something happen.","Restart: tyres are in the window, I’m ready."]},
 'chat.traffic':{it:["Sono nel traffico, sto perdendo mezzo secondo a giro.","Doppiati davanti, fatemi spazio via radio!"],
   en:["I’m in traffic, losing half a second a lap.","Backmarkers ahead, get me some space on the radio!"]},
 // svg labels
 'sv.uc.t':{it:'UNDERCUT — chi anticipa la sosta scavalca', en:'UNDERCUT — stop first, jump ahead'},
 'sv.uc.r':{it:'Rivale', en:'Rival'},'sv.uc.you':{it:'Tu', en:'You'},
 'sv.uc.note':{it:'giri veloci su gomma nuova ➜ quando lui si ferma, sei davanti', en:'fast laps on fresh rubber ➜ when he stops, you are ahead'},
 'sv.uc.cap':{it:"L'anticipo della sosta: i giri su gomma fresca (verde) valgono 1.5-2s ciascuno.", en:'Stopping early: each lap on fresh rubber (green) is worth 1.5-2s.'},
 'sv.of.t':{it:'OFFSET DI MESCOLA — gomma fresca quando conta', en:'COMPOUND OFFSET — fresh rubber when it matters'},
 'sv.of.r':{it:'Rivali', en:'Rivals'},
 'sv.of.a':{it:'soft subito…', en:'softs early…'},'sv.of.b':{it:'…dura vecchia nel finale', en:'…old hards at the end'},
 'sv.of.c':{it:'dura lunga…', en:'long hard stint…'},'sv.of.d':{it:'…attacco con gomma fresca ➜', en:'…attack on fresh rubber ➜'},
 'sv.of.cap':{it:"Invertire l'ordine delle mescole: nel finale la tua gomma rossa è nuova, la loro è finita.", en:'Reverse the compound order: at the end your red tyre is new, theirs is dead.'},
 'sv.sc.t':{it:'SOSTA IN SAFETY CAR — metà prezzo', en:'SAFETY CAR STOP — half price'},
 'sv.sc.a':{it:'bandiera verde: −20s', en:'green flag: −20s'},'sv.sc.b':{it:'in safety car: −10s', en:'under safety car: −10s'},
 'sv.sc.cap':{it:'Il gruppo rallenta dietro la SC mentre tu sei ai box: la stessa sosta costa la metà.', en:'The pack slows behind the SC while you pit: the same stop costs half.'},
 'sv.rc.t':{it:'CROSSOVER — quando cambiare gomma', en:'CROSSOVER — when to switch tyres'},
 'sv.rc.p':{it:'punto di crossover: cambia QUI', en:'crossover point: switch HERE'},
 'sv.rc.w':{it:'gomma da bagnato', en:'wet tyre'},'sv.rc.s':{it:'slick', en:'slick'},
 'sv.rc.d':{it:'pista che si asciuga ➜', en:'track drying ➜'},
 'sv.rc.cap':{it:'Le due curve dei tempi sul giro si incrociano: ogni giro oltre il punto giallo è tempo perso.', en:'The two lap-time curves cross: every lap past the yellow dot is time lost.'},
 'sv.cl.t':{it:'IL CLIFF — la gomma non rallenta: cede', en:'THE CLIFF — the tyre does not slow down: it gives up'},
 'sv.cl.a':{it:'degrado gestibile (~0.1s/giro)', en:'manageable deg (~0.1s/lap)'},
 'sv.cl.b':{it:'CLIFF: crollo + rischio cedimento', en:'CLIFF: collapse + failure risk'},
 'sv.cl.c':{it:'usura ➜ (la zona rossa inizia ~85%)', en:'wear ➜ (red zone starts ~85%)'},
 'sv.cl.cap':{it:"Oltre l'85% di usura la curva precipita: pianifica gli stint per non arrivarci mai.", en:'Past 85% wear the curve plunges: plan stints so you never get there.'},
 'sv.sm.t':{it:'IL CONTO DELLA SOSTA EXTRA', en:'THE EXTRA-STOP MATHS'},
 'sv.sm.a':{it:'guadagno: 0.4s × 30 giri = 12s', en:'gain: 0.4s × 30 laps = 12s'},
 'sv.sm.b':{it:'costo: pit loss 21s + traffico', en:'cost: 21s pit loss + traffic'},
 'sv.sm.c':{it:'se la barra verde non supera la rossa ➜ resta fuori', en:'if the green bar does not beat the red ➜ stay out'},
 'sv.sm.cap':{it:'La sosta extra conviene solo se (delta passo × giri rimasti) batte la pit loss più il traffico.', en:'An extra stop pays only if (pace delta × laps left) beats pit loss plus traffic.'},
 'sv.tp.t':{it:'POSIZIONE IN PISTA — dove non si sorpassa', en:'TRACK POSITION — where you cannot overtake'},
 'sv.tp.a':{it:"serve +1.5s/giro di passo per provare l'attacco", en:'you need +1.5s/lap of pace just to try a move'},
 'sv.tp.b':{it:'a Monaco/Budapest chi è davanti detta il ritmo: la sosta è l’unico sorpasso', en:'at Monaco/Budapest the car ahead sets the pace: the pit stop is the only overtake'},
 'sv.tp.cap':{it:'Nel corridoio tra i muri il più lento comanda: la posizione vale più della gomma.', en:'In the corridor between the walls the slower car rules: position beats rubber.'},
 'sv.ge.t':{it:"L'AZZARDO NEL FINALE — il costo cresce con la pioggia", en:'THE LATE GAMBLE — the cost grows with the rain'},
 'sv.ge.a':{it:'pioggia stabile: rischio basso', en:'steady rain: low risk'},
 'sv.ge.b':{it:'pioggia in aumento: rischio esplosivo', en:'increasing rain: explosive risk'},
 'sv.ge.c':{it:'slick ingestibili ➜ pit obbligato', en:'slicks undriveable ➜ forced stop'},
 'sv.ge.cap':{it:"Guarda la tendenza, non solo l'intensità: con pioggia in aumento perdi tutto in due giri.", en:'Watch the trend, not just the intensity: with rain increasing you lose everything in two laps.'},
 'sv.co.t':{it:'FINESTRA TERMICA — al freddo la gerarchia si ribalta', en:'THERMAL WINDOW — cold flips the hierarchy'},
 'sv.co.a':{it:'troppo fredda: graining', en:'too cold: graining'},'sv.co.b':{it:'finestra OK', en:'window OK'},'sv.co.c':{it:'troppo calda', en:'too hot'},
 'sv.co.d':{it:'la DURA su asfalto freddo resta qui ➜ lenta e si rovina', en:'the HARD on a cold track stays here ➜ slow and self-damaging'},
 'sv.co.e':{it:'la SOFT lavora', en:'the SOFT works'},
 'sv.co.cap':{it:"Ogni mescola ha la sua finestra di temperatura: l'asfalto gelido lascia fuori le dure.", en:'Every compound has a thermal window: a freezing track locks the hards out.'},
 'sv.fx.t':{it:"PISTA NUOVA — l'albero delle opzioni", en:'NEW TRACK — the option tree'},
 'sv.fx.a':{it:'degrado basso ➜ allungo, 1 sosta', en:'low deg ➜ extend, 1 stop'},
 'sv.fx.b':{it:'degrado alto ➜ anticipo, 2 soste', en:'high deg ➜ stop early, 2 stops'},
 'sv.fx.c':{it:'parti versatile, decidi al giro 10 coi dati veri', en:'start versatile, decide at lap 10 with real data'},
 'sv.fx.cap':{it:'Senza storico, la mescola media tiene aperti entrambi i rami del piano.', en:'With no history, the medium keeps both branches of the plan open.'},
 });
Object.assign(I18N,{
 'a11y.skip':{it:'Salta al contenuto',en:'Skip to content'},
 'nav.home':{it:'Home',en:'Home'},'nav.academy':{it:'Academy',en:'Academy'},'nav.career':{it:'Carriera',en:'Career'},'nav.settings':{it:'Impostazioni',en:'Settings'},
 'resume.h':{it:'Riprendi il lavoro al muretto',en:'Resume your pit-wall work'},'resume.btn':{it:'Continua la carriera',en:'Continue career'},'resume.race':{it:'Torna alla gara',en:'Return to live race'},
 'resume.copy':{it:'{0}/24 GP completati · {1} punti · pilota: {2}.',en:'{0}/24 GPs completed · {1} points · driver: {2}.'},
 'filter.search':{it:'Cerca circuito, anno o tema…',en:'Search circuit, year or topic…'},'filter.career':{it:'Cerca un Gran Premio…',en:'Search a Grand Prix…'},
 'filter.all':{it:'Tutti i temi',en:'All topics'},'filter.tyres':{it:'Gomme e soste',en:'Tyres and pit stops'},'filter.weather':{it:'Meteo',en:'Weather'},'filter.neutral':{it:'Safety car e bandiere',en:'Safety cars and flags'},'filter.position':{it:'Posizione e sorpassi',en:'Track position and overtaking'},
 'filter.allraces':{it:'Tutte le gare',en:'All races'},'filter.todo':{it:'Da correre',en:'Not raced'},'filter.done':{it:'Completate',en:'Completed'},'filter.count':{it:'{0} risultati',en:'{0} results'},
 'topic.tyres':{it:'Gomme e soste',en:'Tyres & stops'},'topic.weather':{it:'Meteo',en:'Weather'},'topic.neutral':{it:'Neutralizzazioni',en:'Neutralisations'},'topic.position':{it:'Posizione e sorpassi',en:'Position & overtaking'},
 'glossary.h':{it:'Glossario operativo del muretto',en:'Pit-wall operating glossary'},
 'settings.tag':{it:'Preferenze',en:'Preferences'},'settings.h':{it:'Impostazioni del simulatore',en:'Simulator settings'},
 'settings.sound':{it:'Suoni gara',en:'Race sounds'},'settings.sound.d':{it:'Semafori, radio e conferme operative.',en:'Lights, radio and operational confirmations.'},
 'settings.hints':{it:'Assistente strategico',en:'Strategy assistant'},'settings.hints.d':{it:'Mostra suggerimenti contestuali durante la gara.',en:'Show contextual hints during the race.'},
 'settings.motion':{it:'Riduci animazioni',en:'Reduce motion'},'settings.motion.d':{it:'Riduce movimenti e transizioni.',en:'Reduce movement and transitions.'},
 'settings.contrast':{it:'Contrasto elevato',en:'High contrast'},'settings.contrast.d':{it:'Aumenta contrasto di testo e controlli.',en:'Increase text and control contrast.'},
 'settings.keys':{it:'<b>Scorciatoie gara:</b> <span class="kbd">Spazio</span> pausa, <span class="kbd">N</span> giro, <span class="kbd">1–3</span> ritmo, <span class="kbd">Q–E</span> energia, <span class="kbd">O</span> Overtake, <span class="kbd">B</span> box.',en:'<b>Race shortcuts:</b> <span class="kbd">Space</span> pause, <span class="kbd">N</span> lap, <span class="kbd">1–3</span> pace, <span class="kbd">Q–E</span> energy, <span class="kbd">O</span> Overtake, <span class="kbd">B</span> box.'},
 'settings.reset':{it:'Azzera carriera e progressi',en:'Reset career and progress'},'settings.done':{it:'Fatto',en:'Done'},
 'confirm.reset':{it:'Vuoi davvero cancellare tutti i progressi della carriera?',en:'Do you really want to delete all career progress?'},
 'toast.saved':{it:'Progressi salvati su questo dispositivo.',en:'Progress saved on this device.'},'toast.route':{it:'La gara live non può essere ripristinata dopo un ricaricamento: riapri il briefing e riparti.',en:'A live race cannot be restored after a reload: reopen the briefing and restart.'},'toast.reset':{it:'Carriera azzerata.',en:'Career reset.'},
 'advisor.h':{it:'Assistente',en:'Assistant'},'advisor.sc':{it:'Neutralizzazione: con usura elevata la pit loss è ridotta. Valuta il box.',en:'Neutralisation: pit loss is reduced with high wear. Consider pitting.'},'advisor.wet':{it:'Slick sul bagnato: passa a intermedie o full wet prima che il rischio diventi incontrollabile.',en:'Slicks in the wet: switch to intermediates or full wets before risk becomes unmanageable.'},'advisor.cliff':{it:'Usura vicina al cliff: programma la sosta ora.',en:'Wear is near the cliff: schedule the stop now.'},'advisor.energy':{it:'SOC critico: usa Ricarica per evitare clipping e preparare il prossimo duello.',en:'Critical SOC: use Recharge to avoid clipping and prepare the next fight.'},'advisor.ot':{it:'Overtake attivo e SOC sufficiente: scegli il punto di deployment e conserva margine per la difesa.',en:'Overtake active with sufficient SOC: choose the deployment point and retain a margin for defence.'},'advisor.range':{it:'Sei vicino al secondo: un giro di preparazione può portarti nel range Overtake.',en:'You are close to one second: a preparation lap can put you in Overtake range.'},'advisor.ok':{it:'Parametri sotto controllo. Continua a confrontare passo, usura, SOC e gap.',en:'Parameters under control. Keep comparing pace, wear, SOC and gap.'},
 'decisions.h':{it:'Registro delle decisioni',en:'Decision log'},'decisions.lap':{it:'Giro',en:'Lap'},'decisions.type':{it:'Area',en:'Area'},'decisions.call':{it:'Decisione del muretto',en:'Pit-wall decision'},'decisions.none':{it:'Nessuna decisione registrata.',en:'No decisions recorded.'},
 'decision.start':{it:'Partenza su {0}.',en:'Start on {0}s.'},'decision.pace':{it:'Ritmo impostato su {0}.',en:'Pace set to {0}.'},'decision.energy':{it:'Mappa energia: {0}.',en:'Energy map: {0}.'},'decision.ot':{it:'Overtake chiamato con SOC {0}%.',en:'Overtake called at {0}% SOC.'},'decision.pit':{it:'Pit stop programmato per {0}.',en:'Pit stop scheduled for {0}s.'},'decision.cancelpit':{it:'Pit stop annullato: stay out.',en:'Pit stop cancelled: stay out.'},'decision.pitdone':{it:'Pit stop completato: {0}, perdita {1}s.',en:'Pit stop completed: {0}s, {1}s loss.'},'decision.red':{it:'In bandiera rossa selezionate {0}.',en:'Selected {0}s under the red flag.'},
 'skills.h':{it:'Matrice delle competenze',en:'Skills matrix'},'skills.tyres':{it:'Gestione gomme',en:'Tyre management'},'skills.energy':{it:'Gestione energia',en:'Energy management'},'skills.adapt':{it:'Adattabilità',en:'Adaptability'},'skills.rules':{it:'Disciplina e regole',en:'Discipline & rules'},
 'res.print':{it:'Stampa / salva PDF',en:'Print / save PDF'},
 'footer':{it:'I progressi della carriera vengono salvati automaticamente su questo dispositivo.',en:'Career progress is saved automatically on this device.'}
});
Object.assign(I18N,{
 'view.circuit':{it:'Circuito',en:'Circuit'},'view.radar':{it:'Radar',en:'Radar'},'view.onboard':{it:'Cockpit',en:'Cockpit'},'view.wheel':{it:'Volante',en:'Steering wheel'},
 'radar.forecast':{it:'Previsione',en:'Forecast'},'radar.confidence':{it:'Affidabilità {0}%',en:'Confidence {0}%'},'radar.now':{it:'situazione attuale',en:'current conditions'},'radar.future':{it:'previsione a +{0} min',en:'+{0} min forecast'},
 'thermal.surface':{it:'Superficie',en:'Surface'},'thermal.core':{it:'Carcassa',en:'Core'},'thermal.window':{it:'Finestra',en:'Window'},'thermal.cold':{it:'Fredda',en:'Cold'},'thermal.ok':{it:'Ottimale',en:'Optimal'},'thermal.hot':{it:'Surriscaldata',en:'Overheated'},
 'thermal.cold.effect':{it:'Meno grip e rischio graining.',en:'Less grip and graining risk.'},'thermal.ok.effect':{it:'Grip e degrado nella finestra corretta.',en:'Grip and degradation in the correct window.'},'thermal.hot.effect':{it:'Grip in calo e degrado termico più rapido.',en:'Falling grip and faster thermal degradation.'},
 'pitforecast.h':{it:'Finestra pit e traffico previsto',en:'Pit window and predicted traffic'},'pitforecast.rejoin':{it:'Rientro stimato',en:'Estimated rejoin'},'pitforecast.traffic':{it:'Traffico',en:'Traffic'},'pitforecast.call':{it:'Lettura strategica',en:'Strategic reading'},
 'pitforecast.loss':{it:'pit loss {0}s',en:'pit loss {0}s'},'pitforecast.clear':{it:'aria libera',en:'clear air'},'pitforecast.cars':{it:'{0} vetture',en:'{0} cars'},'pitforecast.safe':{it:'Finestra pulita',en:'Clean window'},'pitforecast.risk':{it:'Rientro nel traffico',en:'Rejoin in traffic'},'pitforecast.undercut':{it:'Possibile undercut',en:'Possible undercut'},'pitforecast.protect':{it:'Proteggi la posizione',en:'Protect position'},
 'pitforecast.detail.clear':{it:'La sosta ti riporterebbe in una finestra relativamente libera.',en:'The stop would return you to a relatively clear window.'},'pitforecast.detail.traffic':{it:'Attenzione: potresti rientrare vicino a {0}.',en:'Caution: you may rejoin close to {0}.'},
 'source.radar':{it:'📡 Radar: {0}% affidabile',en:'📡 Radar: {0}% confidence'},'source.driver.stable':{it:'🎧 Pilota: grip stabile',en:'🎧 Driver: stable grip'},'source.driver.front':{it:'🎧 Pilota: anteriore freddo',en:'🎧 Driver: cold front end'},'source.driver.rear':{it:'🎧 Pilota: posteriore caldo',en:'🎧 Driver: hot rear axle'},'source.driver.wet':{it:'🎧 Pilota: grip variabile',en:'🎧 Driver: changing grip'},
 'source.track.dry':{it:'🛣️ Pista: linea asciutta',en:'🛣️ Track: dry line'},'source.track.damp':{it:'🛣️ Pista: settori disomogenei',en:'🛣️ Track: mixed sectors'},'source.track.wet':{it:'🛣️ Pista: acqua in aumento',en:'🛣️ Track: standing water increasing'},
 'pg.thermal':{it:'Controllo termico',en:'Thermal control'},'pg.thermal.ok':{it:'Hai mantenuto le gomme nella finestra per la maggior parte della gara.',en:'You kept the tyres in their window for most of the race.'},'pg.thermal.ko':{it:'Hai accumulato {0} giri fuori finestra.',en:'You accumulated {0} laps outside the operating window.'},
 'decision.view':{it:'Visuale cambiata: {0}.',en:'View changed: {0}.'},'decision.radar':{it:'Radar consultato a +{0} minuti.',en:'Radar checked at +{0} minutes.'},
 'view.label.circuit':{it:'MAPPA LIVE',en:'LIVE MAP'},'view.label.radar':{it:'RADAR METEO',en:'WEATHER RADAR'},'view.label.onboard':{it:'VISUALE COCKPIT · SIMULAZIONE',en:'COCKPIT VIEW · SIMULATION'},'view.label.wheel':{it:'VOLANTE · TELEMETRIA',en:'STEERING WHEEL · TELEMETRY'},
 'settings.keys':{it:'<b>Scorciatoie gara:</b> <span class="kbd">Spazio</span> pausa, <span class="kbd">N</span> giro, <span class="kbd">1–3</span> ritmo, <span class="kbd">Q–E</span> energia, <span class="kbd">O</span> Overtake, <span class="kbd">B</span> box, <span class="kbd">V</span> cambia visuale, <span class="kbd">R</span> radar.',en:'<b>Race shortcuts:</b> <span class="kbd">Space</span> pause, <span class="kbd">N</span> lap, <span class="kbd">1–3</span> pace, <span class="kbd">Q–E</span> energy, <span class="kbd">O</span> Overtake, <span class="kbd">B</span> box, <span class="kbd">V</span> cycle view, <span class="kbd">R</span> radar.'}
});
function fmt(s, ...args){ return args.reduce((acc,a,i)=>acc.split('{'+i+'}').join(a), s); }
function pick(k){ const arr = I18N[k][LANG] ?? I18N[k].it; return arr[Math.floor(Math.random()*arr.length)]; }
/* ============ Diagrammi SVG (i18n) ============ */
function svgWrap(inner, vb){ return `<svg viewBox="${vb||'0 0 400 150'}" xmlns="http://www.w3.org/2000/svg">${inner}</svg>`; }
const SVG_TXT = 'font-family="Segoe UI,sans-serif" fill="#8896a6" font-size="10"';
function lessonSVG(fx){
  const amber='#ffb000', ok='#3fb950', bad='#ff4d4d', wet='#2f81f7', dim='#56616e';
  switch(fx){
    case 'undercut': return [svgWrap(`
      <text x="8" y="16" ${SVG_TXT}>${t('sv.uc.t')}</text>
      <text x="8" y="42" ${SVG_TXT} fill="#e9eef4">${t('sv.uc.r')}</text><rect x="60" y="32" width="200" height="12" rx="2" fill="${dim}"/><rect x="260" y="32" width="20" height="12" fill="#222"/><rect x="280" y="32" width="110" height="12" rx="2" fill="${dim}"/>
      <text x="8" y="72" ${SVG_TXT} fill="${amber}">${t('sv.uc.you')}</text><rect x="60" y="62" width="140" height="12" rx="2" fill="${dim}"/><rect x="200" y="62" width="20" height="12" fill="#222"/><rect x="220" y="62" width="170" height="12" rx="2" fill="${ok}"/>
      <text x="222" y="92" ${SVG_TXT} fill="${ok}">${t('sv.uc.note')}</text>
      <text x="206" y="58" ${SVG_TXT}>PIT</text><text x="263" y="28" ${SVG_TXT}>PIT</text>`,'0 0 400 100'), t('sv.uc.cap')];
    case 'offset': return [svgWrap(`
      <text x="8" y="16" ${SVG_TXT}>${t('sv.of.t')}</text>
      <text x="8" y="42" ${SVG_TXT} fill="#e9eef4">${t('sv.of.r')}</text><rect x="60" y="32" width="130" height="12" rx="2" fill="#ff2d2d"/><rect x="195" y="32" width="195" height="12" rx="2" fill="#777"/>
      <text x="8" y="72" ${SVG_TXT} fill="${amber}">${t('sv.uc.you')}</text><rect x="60" y="62" width="220" height="12" rx="2" fill="#bbb"/><rect x="285" y="62" width="105" height="12" rx="2" fill="#ff2d2d"/>
      <text x="62" y="28" ${SVG_TXT}>${t('sv.of.a')}</text><text x="240" y="28" ${SVG_TXT}>${t('sv.of.b')}</text>
      <text x="62" y="92" ${SVG_TXT}>${t('sv.of.c')}</text><text x="250" y="92" ${SVG_TXT} fill="${ok}">${t('sv.of.d')}</text>`,'0 0 400 100'), t('sv.of.cap')];
    case 'sc-pit': case 'sc-late': return [svgWrap(`
      <text x="8" y="16" ${SVG_TXT}>${t('sv.sc.t')}</text>
      <rect x="40" y="40" width="120" height="86" fill="none" stroke="${dim}"/><rect x="230" y="40" width="120" height="86" fill="none" stroke="${dim}"/>
      <rect x="65" y="50" width="70" height="76" fill="${bad}" opacity=".8"/><rect x="255" y="88" width="70" height="38" fill="${ok}" opacity=".9"/>
      <text x="62" y="142" ${SVG_TXT}>${t('sv.sc.a')}</text><text x="248" y="142" ${SVG_TXT}>${t('sv.sc.b')}</text>
      <text x="180" y="90" ${SVG_TXT} font-size="18" fill="${amber}">➜</text>`,'0 0 400 152'), t('sv.sc.cap')];
    case 'rain-commit': return [svgWrap(`
      <text x="8" y="16" ${SVG_TXT}>${t('sv.rc.t')}</text>
      <polyline points="30,120 110,116 190,108 270,92 350,60" fill="none" stroke="${bad}" stroke-width="3"/>
      <polyline points="30,60 110,72 190,90 270,108 350,118" fill="none" stroke="${wet}" stroke-width="3"/>
      <circle cx="225" cy="99" r="6" fill="${amber}"/>
      <text x="200" y="135" ${SVG_TXT} fill="${amber}">${t('sv.rc.p')}</text>
      <text x="34" y="50" ${SVG_TXT} fill="${wet}">${t('sv.rc.w')}</text><text x="36" y="135" ${SVG_TXT} fill="${bad}">${t('sv.rc.s')}</text>
      <text x="290" y="45" ${SVG_TXT}>${t('sv.rc.d')}</text>`,'0 0 400 150'), t('sv.rc.cap')];
    case 'tyre-cliff': return [svgWrap(`
      <text x="8" y="16" ${SVG_TXT}>${t('sv.cl.t')}</text>
      <polyline points="30,50 110,56 190,64 250,74 285,84 305,120 318,138" fill="none" stroke="${amber}" stroke-width="3"/>
      <line x1="285" y1="30" x2="285" y2="140" stroke="${bad}" stroke-dasharray="4 4"/>
      <text x="36" y="42" ${SVG_TXT}>${t('sv.cl.a')}</text>
      <text x="292" y="42" ${SVG_TXT} fill="${bad}">${t('sv.cl.b')}</text>
      <text x="30" y="148" ${SVG_TXT}>${t('sv.cl.c')}</text>`,'0 0 400 155'), t('sv.cl.cap')];
    case 'stops-math': return [svgWrap(`
      <text x="8" y="16" ${SVG_TXT}>${t('sv.sm.t')}</text>
      <rect x="60" y="56" width="100" height="70" fill="${ok}" opacity=".85"/><rect x="240" y="36" width="100" height="90" fill="${bad}" opacity=".85"/>
      <text x="62" y="142" ${SVG_TXT}>${t('sv.sm.a')}</text>
      <text x="235" y="142" ${SVG_TXT}>${t('sv.sm.b')}</text>
      <text x="178" y="90" ${SVG_TXT} font-size="20" fill="#e9eef4">&lt;</text>
      <text x="60" y="30" ${SVG_TXT} fill="${amber}">${t('sv.sm.c')}</text>`,'0 0 400 152'), t('sv.sm.cap')];
    case 'track-position': return [svgWrap(`
      <text x="8" y="16" ${SVG_TXT}>${t('sv.tp.t')}</text>
      <rect x="30" y="60" width="340" height="40" rx="20" fill="#1a212a" stroke="${dim}"/>
      <circle cx="150" cy="80" r="10" fill="${dim}"/><circle cx="185" cy="80" r="10" fill="${amber}"/>
      <text x="205" y="50" ${SVG_TXT} fill="${bad}">${t('sv.tp.a')}</text>
      <text x="40" y="120" ${SVG_TXT}>${t('sv.tp.b')}</text>`,'0 0 400 132'), t('sv.tp.cap')];
    case 'gamble-end': return [svgWrap(`
      <text x="8" y="16" ${SVG_TXT}>${t('sv.ge.t')}</text>
      <polyline points="30,120 110,116 190,104 250,80 310,40 350,28" fill="none" stroke="${bad}" stroke-width="3"/>
      <line x1="30" y1="125" x2="350" y2="125" stroke="${dim}"/>
      <text x="36" y="140" ${SVG_TXT}>${t('sv.ge.a')}</text>
      <text x="230" y="140" ${SVG_TXT} fill="${bad}">${t('sv.ge.b')}</text>
      <text x="210" y="60" ${SVG_TXT} fill="${amber}">${t('sv.ge.c')}</text>`,'0 0 400 150'), t('sv.ge.cap')];
    case 'cold': return [svgWrap(`
      <text x="8" y="16" ${SVG_TXT}>${t('sv.co.t')}</text>
      <rect x="60" y="40" width="280" height="24" rx="4" fill="#11161c" stroke="${dim}"/>
      <rect x="80" y="40" width="90" height="24" fill="${bad}" opacity=".7"/><rect x="170" y="40" width="100" height="24" fill="${ok}" opacity=".7"/><rect x="270" y="40" width="60" height="24" fill="${bad}" opacity=".7"/>
      <text x="74" y="80" ${SVG_TXT}>${t('sv.co.a')}</text><text x="190" y="80" ${SVG_TXT} fill="${ok}">${t('sv.co.b')}</text><text x="276" y="80" ${SVG_TXT}>${t('sv.co.c')}</text>
      <circle cx="120" cy="52" r="7" fill="#ececec"/><text x="60" y="108" ${SVG_TXT}>${t('sv.co.d')}</text>
      <circle cx="210" cy="52" r="7" fill="#ff2d2d"/><text x="215" y="34" ${SVG_TXT} fill="${ok}">${t('sv.co.e')}</text>`,'0 0 400 118'), t('sv.co.cap')];
    default: return [svgWrap(`
      <text x="8" y="16" ${SVG_TXT}>${t('sv.fx.t')}</text>
      <circle cx="60" cy="75" r="14" fill="#ffd400"/><text x="50" y="79" font-size="10" fill="#241d00" font-family="sans-serif">M</text>
      <line x1="74" y1="68" x2="200" y2="40" stroke="${dim}"/><line x1="74" y1="82" x2="200" y2="110" stroke="${dim}"/>
      <text x="208" y="42" ${SVG_TXT} fill="${ok}">${t('sv.fx.a')}</text>
      <text x="208" y="113" ${SVG_TXT} fill="${amber}">${t('sv.fx.b')}</text>
      <text x="20" y="125" ${SVG_TXT}>${t('sv.fx.c')}</text>`,'0 0 400 138'), t('sv.fx.cap')];
  }
}


/* ============ Profili pilota ============ */
const DRIVER_PROFILES = {
  manager:{id:'manager',icon:'🛡️',tyreWear:.88,energyEff:1.08,pushGain:.90,pushWear:.86,consistency:.78,errorRisk:.78,contactRisk:.82,wetRisk:.88,overtakeGain:.92,feedbackRate:1.0,stats:[92,88,62,72],url:'https://www.formula1.com/en/latest/article/hamilton-seals-historic-7th-title-with-peerless-wet-weather-victory-in.4wK1atemiXDvWXQxOknL4J'},
  attacker:{id:'attacker',icon:'🔥',tyreWear:1.09,energyEff:.95,pushGain:1.18,pushWear:1.22,consistency:1.10,errorRisk:1.28,contactRisk:1.34,wetRisk:1.15,overtakeGain:1.16,feedbackRate:1.0,stats:[58,60,94,58],url:'https://www.formula1.com/en/video/exclusive-brazil-2016-onboard-for-all-of-verstappens-incredible-late-charge.1687518342573611218'},
  metronome:{id:'metronome',icon:'🎯',tyreWear:.98,energyEff:1.00,pushGain:1.00,pushWear:1.00,consistency:.45,errorRisk:.68,contactRisk:.78,wetRisk:.84,overtakeGain:.99,feedbackRate:.9,stats:[78,76,76,78],url:'https://www.formula1.com/en/latest/article/top-10-moments-of-michael-schumacher-brilliance.1r4cJET4PaUsysIG8oqgS0'},
  adaptive:{id:'adaptive',icon:'🧠',tyreWear:.96,energyEff:1.03,pushGain:.98,pushWear:.96,consistency:.70,errorRisk:.84,contactRisk:.88,wetRisk:.70,overtakeGain:1.03,feedbackRate:.58,stats:[78,82,72,96],url:'https://www.formula1.com/en/latest/article/f1-academy-champion-pin-graduates-to-development-driver-role-with-mercedes.4bRExi3YOT9krZQIoGWDHF'}
};
let selectedDriverProfile = null;
let driverReturnToCalendar = false;
function driverProfile(){ return DRIVER_PROFILES[selectedDriverProfile] || DRIVER_PROFILES.metronome; }
function driverTitle(id){ return t('driver.'+id+'.h'); }
function openDriverSelect(fromCalendar){
  driverReturnToCalendar=!!fromCalendar;
  renderDriverProfiles();
  showScreen('screen-driver');
}
function cancelDriverSelect(){
  if(driverReturnToCalendar && selectedDriverProfile) openGpSelect(true);
  else showScreen('screen-menu');
}
function chooseDriverProfile(id){
  if(!DRIVER_PROFILES[id]) return;
  selectedDriverProfile=id;
  renderDriverProfiles(); savePersistentState();
}
function confirmDriverSelection(){
  if(!selectedDriverProfile) return;
  savePersistentState(); openGpSelect(true);
}
function renderDriverProfiles(){
  const grid=document.getElementById('driver-grid');
  if(!grid) return;
  grid.innerHTML='';
  ['manager','attacker','metronome','adaptive'].forEach(id=>{
    const p=DRIVER_PROFILES[id];
    const card=document.createElement('button');
    card.type='button';
    card.className='drivercard'+(selectedDriverProfile===id?' sel':'');
    card.setAttribute('aria-pressed',selectedDriverProfile===id?'true':'false');
    const labs=[t('driver.stats.tyres'),t('driver.stats.energy'),t('driver.stats.attack'),t('driver.stats.feedback')];
    const stats=p.stats.map((v,i)=>`<div class="driverstat"><b>${v}</b><span>${labs[i]}</span></div>`).join('');
    card.innerHTML=`<div class="drivericon">${p.icon}</div><h3>${driverTitle(id)}</h3><div class="driverdesc">${t('driver.'+id+'.d')}</div><div class="driverstats">${stats}</div><div class="drivertrade"><b>${t('driver.'+id+'.trade').split(':')[0]}:</b>${t('driver.'+id+'.trade').includes(':')?t('driver.'+id+'.trade').slice(t('driver.'+id+'.trade').indexOf(':')+1):t('driver.'+id+'.trade')}</div><div class="drivercase"><b>${t('driver.realcase')}:</b> ${t('driver.'+id+'.case')}<br><a href="${p.url}" target="_blank" rel="noopener" onclick="event.stopPropagation()">${t('driver.source')}</a></div>`;
    card.onclick=()=>chooseDriverProfile(id);
    grid.appendChild(card);
  });
  const line=document.getElementById('driver-selected-line');
  const btn=document.getElementById('driver-confirm-btn');
  if(selectedDriverProfile){ line.innerHTML=fmt(t('driver.selected'),driverTitle(selectedDriverProfile)); btn.disabled=false; }
  else { line.innerHTML=t('driver.none'); btn.disabled=true; }
}
function updateDriverLabels(){
  const p=driverProfile();
  const line=document.getElementById('career-driver-line');
  if(line && selectedDriverProfile) line.innerHTML=`${p.icon} ${driverTitle(p.id)}`;
  const chip=document.getElementById('race-driver-chip');
  if(chip) chip.innerHTML=`<span>${p.icon}</span><b>${driverTitle(p.id)}</b>`;
}


/* ============ Persistence, routing, settings, filters ============ */
function appBasePath(){
  if(location.hostname.endsWith('github.io')){const seg=location.pathname.split('/').filter(Boolean)[0];return seg?'/'+seg+'/':'/';}
  return '/';
}
const APP_BASE=appBasePath();
function routeUrl(rel=''){return APP_BASE+String(rel).replace(/^\/+/, '');}
function slugIndex(slug){return GP_SLUGS.indexOf(String(slug||'').replace(/\/$/,''));}
function topicForFx(fx){if(['tyre-cliff','cold','stops-math','offset','undercut'].includes(fx))return 'tyres';if(['rain-commit','gamble-end'].includes(fx))return 'weather';if(['sc-pit','sc-late'].includes(fx))return 'neutral';return 'position';}
function topicLabel(topic){return t('topic.'+topic);}
function safeStore(){try{return window.localStorage}catch(_e){return null}}
function savePersistentState(){
  const store=safeStore();if(!store)return;
  try{store.setItem(STORAGE_KEY,JSON.stringify({version:4,lang:LANG,career,driver:selectedDriverProfile,settings:appSettings,lastResult:lastResultState,lastGp:lastVisitedGp,updatedAt:Date.now()}));}catch(_e){}
  renderResumeCard();
}
function loadPersistentState(){
  const store=safeStore();if(!store)return;
  try{const d=JSON.parse(store.getItem(STORAGE_KEY)||'null');if(!d)return;if(d.career)career=d.career;if(d.driver&&DRIVER_PROFILES[d.driver])selectedDriverProfile=d.driver;if(d.settings)appSettings=Object.assign(appSettings,d.settings);if(d.lastResult)lastResultState=d.lastResult;if(Number.isInteger(d.lastGp))lastVisitedGp=d.lastGp;if(d.lang)LANG=d.lang;}catch(_e){}
}
function renderResumeCard(){
  const card=document.getElementById('resume-card');if(!card)return;
  const done=Object.keys(career.strat||{}).length;const has=!!selectedDriverProfile||done>0||!!(S&&!S.ended);
  card.hidden=!has;if(!has)return;
  const profile=selectedDriverProfile?driverTitle(selectedDriverProfile):t('driver.none');
  document.getElementById('resume-copy').innerHTML=fmt(t('resume.copy'),done,career.stratPts||0,profile);
  const live=!!(S&&S.started&&!S.ended);document.getElementById('resume-race-btn').hidden=!live;
}
function resumeCareer(){if(selectedDriverProfile)openGpSelect(true);else openDriverSelect(false)}
function resumeLiveRace(){if(S&&!S.ended){showScreen('screen-race');renderRace();startTrackAnim()}else resumeCareer()}
function resetCareer(){
  if(!confirm(t('confirm.reset')))return;
  career={stratPts:0,strat:{},voti:{}};selectedDriverProfile=null;lastResultState=null;lastVisitedGp=null;S=null;
  const store=safeStore();if(store)store.removeItem(STORAGE_KEY);renderResumeCard();showToast(t('toast.reset'));goHome();
}
function showToast(message){const el=document.getElementById('app-toast');if(!el)return;el.textContent=message;el.classList.add('show');clearTimeout(toastTimer);toastTimer=setTimeout(()=>el.classList.remove('show'),3000)}
function setAppSetting(key,value){if(!(key in appSettings))return;appSettings[key]=!!value;applySettings();savePersistentState();if(key==='sound'&&value)playTone(560,.08)}
function applySettings(){
  document.body.classList.toggle('reduce-motion',!!appSettings.reducedMotion);document.body.classList.toggle('high-contrast',!!appSettings.highContrast);
  const map={sound:'setting-sound',hints:'setting-hints',reducedMotion:'setting-motion',highContrast:'setting-contrast'};Object.entries(map).forEach(([k,id])=>{const e=document.getElementById(id);if(e)e.checked=!!appSettings[k]});
  const a=document.getElementById('strategy-advisor');if(a)a.hidden=!appSettings.hints;
}
function openSettings(){applySettings();const d=document.getElementById('settings-dialog');if(d.showModal)d.showModal();else d.setAttribute('open','')}
function closeSettings(){const d=document.getElementById('settings-dialog');if(d.close)d.close();else d.removeAttribute('open')}
function playTone(freq=520,dur=.06,type='sine'){
  if(!appSettings.sound)return;try{audioCtx=audioCtx||new(window.AudioContext||window.webkitAudioContext)();const o=audioCtx.createOscillator(),g=audioCtx.createGain();o.type=type;o.frequency.value=freq;g.gain.setValueAtTime(.045,audioCtx.currentTime);g.gain.exponentialRampToValueAtTime(.001,audioCtx.currentTime+dur);o.connect(g).connect(audioCtx.destination);o.start();o.stop(audioCtx.currentTime+dur)}catch(_e){}
}
function renderGlossary(){
  const grid=document.getElementById('glossary-grid');if(!grid)return;
  const terms=LANG==='it'?[['SOC','Stato di carica utilizzabile della batteria.'],['Deployment','Erogazione dell’energia elettrica per migliorare il tempo sul giro.'],['Detection Line','Punto in cui viene misurato il gap per stabilire l’accesso all’Overtake.'],['Overtake','Modalità regolamentare disponibile quando il pilota entra nel range previsto.'],['Undercut','Sosta anticipata per sfruttare subito la gomma nuova e scavalcare un rivale.'],['Overcut','Stint prolungato per sfruttare aria libera o gomma più fresca nel finale.'],['Tyre cliff','Crollo improvviso della prestazione oltre una soglia di usura o temperatura.'],['Crossover','Momento in cui una gomma diventa più veloce dell’altra al cambiare della pista.'],['Delta','Differenza di tempo rispetto a un riferimento, a un rivale o a un target.'],['VSC','Virtual Safety Car: velocità ridotta tramite un delta obbligatorio senza compattare completamente il gruppo.']]:[['SOC','The usable state of charge of the battery.'],['Deployment','Release of electrical energy to improve lap time.'],['Detection Line','Point where the gap is measured to determine access to Overtake.'],['Overtake','Regulatory mode available when the driver enters the prescribed range.'],['Undercut','Stopping early to exploit fresh tyres immediately and jump a rival.'],['Overcut','Extending the stint to exploit clear air or fresher tyres later.'],['Tyre cliff','A sudden performance collapse beyond a wear or temperature threshold.'],['Crossover','The moment one tyre becomes faster than another as track conditions change.'],['Delta','Time difference to a reference, rival or target.'],['VSC','Virtual Safety Car: a mandatory reduced-speed delta without fully bunching the field.']];
  grid.innerHTML=terms.map(([a,b])=>`<div class="glossaryterm"><b>${a}</b><span>${b}</span></div>`).join('');
}
function filterAcademy(){
  const q=(document.getElementById('academy-search')?.value||'').trim().toLowerCase(),topic=document.getElementById('academy-topic')?.value||'all';let n=0;
  document.querySelectorAll('#academy-grid .gpcard').forEach(c=>{const ok=(!q||c.dataset.search.includes(q))&&(topic==='all'||c.dataset.topic===topic);c.hidden=!ok;if(ok)n++});
  const count=document.getElementById('academy-count');if(count)count.textContent=fmt(t('filter.count'),n);
}
function filterCareerGrid(){
  const q=(document.getElementById('career-search')?.value||'').trim().toLowerCase(),status=document.getElementById('career-status')?.value||'all';let n=0;
  document.querySelectorAll('#gpgrid .gpcard').forEach(c=>{const done=c.dataset.done==='1';const ok=(!q||c.dataset.search.includes(q))&&(status==='all'||(status==='done'&&done)||(status==='todo'&&!done));c.hidden=!ok;if(ok)n++});
  const count=document.getElementById('career-count');if(count)count.textContent=fmt(t('filter.count'),n);
}
function relativeRoute(){let p=location.pathname;if(p.startsWith(APP_BASE))p=p.slice(APP_BASE.length);return p.replace(/^\/+|\/+$/g,'')}
function routeForScreen(id){
  if(id==='screen-menu')return '';
  if(id==='screen-academy')return 'academy/';
  if(id==='screen-driver')return 'career/driver/';
  if(id==='screen-gp')return 'career/calendar/';
  if(id==='screen-lesson'&&currentLessonIndex!==null)return currentLessonBackTo==='pre'?`career/gp/${GP_SLUGS[currentLessonIndex]}/dossier/`:`academy/gp/${GP_SLUGS[currentLessonIndex]}/`;
  if(id==='screen-pre'&&currentPreRaceIndex!==null)return `career/gp/${GP_SLUGS[currentPreRaceIndex]}/`;
  if(id==='screen-race'&&S)return `race/${GP_SLUGS[S.ci]}/`;
  if(id==='screen-results'&&S)return `results/${GP_SLUGS[S.ci]}/`;
  return '';
}
function setRoute(rel,replace=false){
  if(routeSuppressed||location.protocol==='file:')return;const url=routeUrl(rel);if(location.pathname===url)return;history[replace?'replaceState':'pushState']({rel},'',url);
}
function updatePageMeta(id){
  let title='Muretto — F1 Strategy Academy',desc=LANG==='it'?'Accademia bilingue di strategia Formula 1 per studenti, futuri ingegneri e strategist.':'A bilingual Formula 1 strategy academy for students and future engineers and strategists.';
  if(id==='screen-academy')title=LANG==='it'?'Academy — Muretto':'Academy — Muretto';
  else if(id==='screen-driver')title=LANG==='it'?'Scelta pilota — Muretto':'Driver selection — Muretto';
  else if(id==='screen-gp')title=LANG==='it'?'Calendario carriera — Muretto':'Career calendar — Muretto';
  else if(id==='screen-lesson'&&currentLessonIndex!==null)title=`${LX(currentLessonIndex).t} — Muretto`;
  else if(id==='screen-pre'&&currentPreRaceIndex!==null)title=`${gpName(currentPreRaceIndex)} — Muretto`;
  else if(id==='screen-race'&&S)title=`LIVE · ${gpName(S.ci)} — Muretto`;
  else if(id==='screen-results'&&S)title=`${LANG==='it'?'Risultati':'Results'} · ${gpName(S.ci)} — Muretto`;
  document.title=title;document.querySelector('meta[name="description"]')?.setAttribute('content',desc);document.getElementById('canonical-link')?.setAttribute('href','https://antocaso21.github.io'+location.pathname);
}
function updateAppNav(id){
  const active=id==='screen-academy'||id==='screen-lesson'?'nav-academy':id==='screen-driver'||id==='screen-gp'||id==='screen-pre'||id==='screen-race'||id==='screen-results'?'nav-career':'nav-home';
  ['nav-home','nav-academy','nav-career'].forEach(x=>{const e=document.getElementById(x);if(e){e.classList.toggle('active',x===active);e.toggleAttribute('aria-current',x===active)}});
}
function goHome(){showScreen('screen-menu')}
function goCareer(){if(S&&!S.ended&&document.getElementById('screen-race').classList.contains('active')){clearInterval(autoTimer);autoTimer=null}if(selectedDriverProfile)openGpSelect(true);else openDriverSelect(false)}
function handleRoute(){
  const rel=relativeRoute(),parts=rel.split('/').filter(Boolean);routeSuppressed=true;
  try{
    if(!parts.length){showScreen('screen-menu');return}
    if(parts[0]==='academy'&&parts.length===1){openAcademy();return}
    if(parts[0]==='academy'&&parts[1]==='gp'){const i=slugIndex(parts[2]);if(i>=0){openLesson(i,'screen-academy');return}}
    if(parts[0]==='career'&&parts[1]==='driver'){openDriverSelect(false);return}
    if(parts[0]==='career'&&parts[1]==='calendar'){selectedDriverProfile?openGpSelect(true):openDriverSelect(false);return}
    if(parts[0]==='career'&&parts[1]==='gp'){const i=slugIndex(parts[2]);if(i>=0){if(parts[3]==='dossier')openLesson(i,'pre');else openPreRace(i);return}}
    if(parts[0]==='race'){const i=slugIndex(parts[1]);if(i>=0&&S&&S.ci===i&&!S.ended){showScreen('screen-race');renderRace();return}if(i>=0){openPreRace(i);setTimeout(()=>showToast(t('toast.route')),0);return}}
    if(parts[0]==='results'){const i=slugIndex(parts[1]);if(i>=0&&lastResultState&&lastResultState.ci===i){document.getElementById('results-content').innerHTML=lastResultState.html;showScreen('screen-results');return}}
    showScreen('screen-menu');
  }finally{routeSuppressed=false}
}
function initApp(){
  loadPersistentState();applySettings();renderGlossary();
  const p=new URLSearchParams(location.search),redirect=p.get('route');if(redirect){history.replaceState({},'',redirect+(location.hash||''))}
  setLang(LANG||'it');handleRoute();renderResumeCard();
  window.addEventListener('popstate',handleRoute);
  if('serviceWorker'in navigator&&location.protocol.startsWith('http')){navigator.serviceWorker.register(routeUrl('sw-v6.js'),{scope:routeUrl(''),updateViaCache:'none'}).then(r=>r.update()).catch(()=>{});}
}
window.addEventListener('keydown',e=>{
  if(e.target&&['INPUT','SELECT','TEXTAREA'].includes(e.target.tagName))return;
  if(e.key==='Escape'){closeSettings();return}
  const racing=document.getElementById('screen-race')?.classList.contains('active')&&S&&S.started&&!S.ended;if(!racing)return;
  const k=e.key.toLowerCase();if(k===' '){e.preventDefault();toggleAuto()}else if(k==='n')manualLap();else if(k==='1')setPace('push');else if(k==='2')setPace('norm');else if(k==='3')setPace('save');else if(k==='q')setEnergyMode('recharge');else if(k==='w')setEnergyMode('balanced');else if(k==='e')setEnergyMode('deploy');else if(k==='o')useAttack();else if(k==='b')toggleBoxMenu();else if(k==='v'){const i=RACE_VIEWS.indexOf(liveView);setRaceView(RACE_VIEWS[(i+1)%RACE_VIEWS.length])}else if(k==='r')setRaceView('radar');
});
function logDecision(kind,text){if(!S||S.initializing)return;S.decisions=S.decisions||[];S.decisions.push({lap:Math.min(S.lap,S.c.laps),kind,text});if(S.decisions.length>80)S.decisions.shift()}
function renderAdvisor(){
  const el=document.getElementById('strategy-advisor');if(!el||!S){return}el.hidden=!appSettings.hints;if(el.hidden)return;const me=S.cars.find(x=>x.me),wx=S.wx[Math.min(S.lap,S.wx.length-1)];let msg=t('advisor.ok');
  if((S.sc>0||S.vsc>0)&&me.wear>40)msg=t('advisor.sc');else if(wx>0&&['S','M','H'].includes(me.tyre))msg=t('advisor.wet');else if(me.wear>76)msg=t('advisor.cliff');else if(me.battery<20)msg=t('advisor.energy');else if(me.otActive&&me.battery>=24)msg=t('advisor.ot');else if(me.detGap!==null&&me.detGap<=1.35&&!me.otActive)msg=t('advisor.range');
  el.innerHTML=`<b>${t('advisor.h')}:</b> ${msg}`;
}

/* ============ Navigazione (i18n) ============ */
function showScreen(id){
  const target=document.getElementById(id);if(!target)return;
  const leavingRace=id!=='screen-race'&&document.getElementById('screen-race')?.classList.contains('active');
  if(leavingRace&&autoTimer){clearInterval(autoTimer);autoTimer=null;const p=document.getElementById('btn-play');if(p)p.textContent=t('btn.resume')}
  document.querySelectorAll('.screen').forEach(s=>s.classList.remove('active'));target.classList.add('active');
  if(id!=='screen-race'){const ov=document.getElementById('startoverlay');if(ov)ov.classList.remove('show','lightsout');if(trackRAF){cancelAnimationFrame(trackRAF);trackRAF=null}}
  updateAppNav(id);updatePageMeta(id);setRoute(routeForScreen(id));window.scrollTo({top:0,behavior:appSettings.reducedMotion?'auto':'smooth'});
  const focus=target.querySelector('h1,h2,[tabindex]');if(focus){if(!focus.hasAttribute('tabindex'))focus.setAttribute('tabindex','-1');setTimeout(()=>focus.focus({preventScroll:true}),20)}
  renderResumeCard();
}
function setLed(cls){ document.getElementById('ledbar').className = 'ledbar ' + (cls||''); }

function openAcademy(){
  const grid = document.getElementById('academy-grid'); grid.innerHTML='';
  LESSONS.forEach((_,i)=>{
    const L = LX(i),topic=topicForFx(L.fx);
    const b = document.createElement('button');
    b.className='gpcard';b.dataset.topic=topic;b.dataset.search=`${L.t} ${L.y} ${gpCity(i)} ${gpName(i)} ${topicLabel(topic)}`.toLowerCase();
    b.innerHTML = `<span class="rnd">R${i+1}</span><div class="nm"><span class="flag">${CIRCUITS[i].flag}</span>${L.t}</div>
      <div class="sub" style="font-size:12px;">${L.y} · ${gpCity(i)}</div>
      <div class="lez">${t('dossier.3p')}</div><span class="topicchip">${topicLabel(topic)}</span>`;
    b.onclick = ()=> openLesson(i, 'screen-academy');
    grid.appendChild(b);
  });
  renderGlossary();showScreen('screen-academy');filterAcademy();
}

function openLesson(li, backTo){
  currentLessonIndex=li;currentLessonBackTo=backTo==='pre'?'pre':'screen-academy';
  const L = LX(li);
  const [svg, cap] = lessonSVG(L.fx);
  const el = document.getElementById('lesson-content');
  el.innerHTML = `
    <div class="topbar">
      <div><span class="tag">${fmt(t('lv.tag'), li+1)}${CIRCUITS[li].flag} ${gpCity(li)}</span>
        <h1 style="font-size:clamp(20px,4vw,32px);">${L.t}</h1>
        <div class="yr" style="color:var(--wet); font-weight:800; font-style:italic;">${t('pre.case')}${L.y}</div>
      </div>
      <button class="btn" onclick="${backTo==='pre' ? `openPreRace(${li})` : `openAcademy()`}">${t('lv.back')}</button>
    </div>
    <div class="pager" id="lpager">
      ${L.pages.map((_,p)=>`<button class="pagebtn ${p===0?'sel':''}" onclick="lessonPage(${li},${p})">${p===0?t('lv.p1'):p===1?t('lv.p2'):p===2?t('lv.p3'):t('lv.p4')}</button>`).join('')}
    </div>
    <div class="lessonpage" id="lpage">${L.pages[0]}</div>
    <div class="svgbox">${svg}<div class="svgcap">${cap}</div></div>
    <div class="ctrlrow">
      <button class="btn" id="lprev" onclick="lessonStep(${li},-1)" disabled>${t('lv.prev')}</button>
      <button class="btn primary" id="lnext" onclick="lessonStep(${li},1)">${t('lv.next')}</button>
      <button class="btn" onclick="openPreRace(${li})">${t('lv.gogp')}</button>
    </div>`;
  el.dataset.page = 0;
  showScreen('screen-lesson');
}
function lessonPage(li, p){
  const el = document.getElementById('lesson-content');
  el.dataset.page = p;
  document.getElementById('lpage').innerHTML = LX(li).pages[p];
  document.querySelectorAll('#lpager .pagebtn').forEach((b,i)=>b.classList.toggle('sel', i===p));
  document.getElementById('lprev').disabled = p===0;
  document.getElementById('lnext').disabled = p===LX(li).pages.length-1;
  document.getElementById('lpage').scrollIntoView({behavior:'smooth', block:'nearest'});
}
function lessonStep(li, d){
  const el = document.getElementById('lesson-content');
  const p = Math.max(0, Math.min(LX(li).pages.length-1, (+el.dataset.page||0) + d));
  lessonPage(li, p);
}

function openGpSelect(skipProfileCheck){
  if(!selectedDriverProfile && !skipProfileCheck){ openDriverSelect(false); return; }
  const grid = document.getElementById('gpgrid'); grid.innerHTML = '';
  CIRCUITS.forEach((c,i)=>{
    const L = LX(i);
    const card = document.createElement('button');
    card.className = 'gpcard';
    card.dataset.search=`${gpName(i)} ${gpCity(i)} ${L.t} ${L.y}`.toLowerCase();card.dataset.done=career.strat[i]!==undefined?'1':'0';
    let done = '';
    if(career.strat[i]!==undefined){
      const p = career.strat[i], v = career.voti[i];
      done = `<div class="done" style="color:${p<=3?'var(--ok)':p<=10?'var(--medium)':'var(--dim)'}">✔ ${p===99?'DNF':'P'+p}${v?` · 📋 ${v}/10`:''}</div>`;
    }
    card.innerHTML = `<span class="rnd">R${i+1}</span><div class="nm"><span class="flag">${c.flag}</span>${gpName(i)}</div>
      <div class="sub" style="font-size:12px;">${gpCity(i)}</div>
      <div class="meta"><span>🌧️ ${Math.round(c.rain*100)}%</span><span>🌡️ ${c.temp}°C</span><span>↻ ${c.laps}</span></div>
      <div class="lez">📚 ${L.t} (${L.y})</div>${done}`;
    card.onclick = ()=> openPreRace(i);
    grid.appendChild(card);
  });
  document.getElementById('career-line').textContent = t('pts.career') + career.stratPts;
  updateDriverLabels();
  setLed(''); showScreen('screen-gp');filterCareerGrid();
}

let preQuizOK = null;
function openPreRace(ci){
  currentPreRaceIndex=ci;lastVisitedGp=ci;savePersistentState();
  const c = CIRCUITS[ci], L = LX(ci);
  preQuizOK = null;
  const el = document.getElementById('pre-content');
  let special = '';
  if(c.maxStint) special = fmt(t('pre.specialQ'), c.maxStint);
  if(c.cold) special = t('pre.specialC');
  const degTxt = c.deg>=1.2?t('deg.vh'):c.deg>=1.0?t('deg.h'):t('deg.l');
  const otTxt = c.ot>=0.7?t('ot.no'):c.ot>=0.4?t('ot.hard'):t('ot.ok');
  el.innerHTML = `
    <span class="tag">${fmt(t('pre.round'), ci+1, gpCity(ci))}</span>
    <h1>${c.flag} ${gpName(ci)}</h1>
    <div class="lesson">
      <h2 style="margin:0 0 2px;">📚 ${L.t}</h2>
      <div class="yr">${t('pre.case')}${L.y}</div>
      <div class="ev">${L.ev}</div>
      <div class="ins">${t('pre.lesson')}${L.ins}</div>
      <div class="ctrlrow"><button class="btn" onclick="openLesson(${ci}, 'pre')">${t('pre.dossier')}</button></div>
      <div class="quiz">
        <h3 style="color:var(--amber); font-size:13px;">${t('pre.quizh')}</h3>
        <div style="font-size:14.5px; margin-top:6px;"><b>${L.q}</b></div>
        <div id="quizopts"></div>
        <div class="quizex" id="quizex"></div>
      </div>
    </div>
    <div class="lesson" id="setupbox" style="border-left-color:var(--amber); opacity:.45; pointer-events:none;">
      <h2 style="margin:0;">${t('pre.brief')}</h2>
      <p class="sub" style="font-size:14px; line-height:1.6;">
        ${fmt(t('pre.line'), c.laps, c.temp + Math.round(Math.random()*4-2), Math.round(c.rain*100), degTxt, c.pit, otTxt)}${special}
      </p>
      <div class="ctrlrow">
        <button class="compound c-S" onclick="startStrat(${ci},'S')">S</button>
        <button class="compound c-M" onclick="startStrat(${ci},'M')">M</button>
        <button class="compound c-H" onclick="startStrat(${ci},'H')">H</button>
        <button class="compound c-I" onclick="startStrat(${ci},'I')">I</button>
        <button class="compound c-W" onclick="startStrat(${ci},'W')">W</button>
      </div>
    </div>
    <div class="ctrlrow"><button class="btn" onclick="openGpSelect()">${t('pre.back')}</button></div>`;
  const opts = document.getElementById('quizopts');
  L.o.forEach((o,idx)=>{
    const b = document.createElement('button');
    b.className = 'quizopt'; b.textContent = (idx+1)+'. '+o;
    b.onclick = ()=>{
      if(preQuizOK!==null) return;
      preQuizOK = (idx===L.a);
      opts.children[L.a].classList.add('right');
      if(!preQuizOK) b.classList.add('wrong');
      const ex = document.getElementById('quizex');
      ex.style.display='block';
      ex.innerHTML = (preQuizOK ? t('pre.right') : t('pre.wrong')) + L.ex + t('pre.now');
      const sb = document.getElementById('setupbox');
      sb.style.opacity = 1; sb.style.pointerEvents = 'auto';
    };
    opts.appendChild(b);
  });
  showScreen('screen-pre');
}
/* ============ Simulazione gara (i18n) ============ */
let S = null, autoTimer = null, flavorTimers = [];
const SPEEDS = {
  rapida: 6000,   // circa 6 secondi per giro
  tv: 15000,      // circa 15 secondi per giro
  estesa: 35000   // circa 35 secondi per giro
};
const REAL_RACE_DURATION = 90 * 60 * 1000; // gara reale simulata in circa 90 minuti
let curSpeed = 'reale';

function getLapDelay(){
  if(curSpeed === 'reale'){
    const laps = (S && S.c && S.c.laps) ? S.c.laps : 60;
    return Math.round(REAL_RACE_DURATION / laps);
  }
  return SPEEDS[curSpeed] || SPEEDS.rapida;
}

function updateSpeedInfo(){
  const el = document.getElementById('speed-info');
  if(!el) return;
  const delay = getLapDelay();
  if(S && !S.started){
    el.textContent = t('spd.locked');
  } else if(curSpeed === 'reale'){
    el.textContent = t('spd.realinfo');
  } else {
    const seconds = Math.round(delay / 1000);
    el.textContent = LANG === 'it' ? `≈ ${seconds} s per giro` : `≈ ${seconds} s per lap`;
  }
}

function genWeatherTimeline(c, bias){
  const tl = []; const rainP = Math.min(.85, c.rain * (bias==='rain-commit'?1.35:1));
  let st = Math.random() < rainP*0.35 ? 1 : 0;
  for(let l=0; l<=c.laps+2; l++){
    tl.push(st);
    const r = Math.random();
    if(st===0){ if(r < rainP*1.35/c.laps) st = 1; }
    else if(st===1){ if(r < 0.10) st = 0; else if(r < 0.10 + rainP*0.12) st = 2; }
    else { if(r < 0.09) st = 1; }
  }
  return tl;
}

async function startStrat(ci, startTyre){
  const c = CIRCUITS[ci], L = LX(ci);
  const fx = L.fx;
  const wx = genWeatherTimeline(c, fx);
  const scMult = (fx==='sc-pit') ? 1.7 : 1;
  const lateSC = (c.lateSC && Math.random()<0.6) ? c.laps - 5 - Math.floor(Math.random()*3) : null;
  const myGrid = 4 + Math.floor(Math.random()*8);
  const cars = []; let gi = 0;
  for(let p=0; p<21; p++){
    const base = {tyre:'M', wear:0, stint:0, time:p*0.35, pits:0, out:false, vp:-p*0.005, tp:0, fresh:0, dmg:0, pen:0, battery:58+Math.random()*25, energyMode:'balanced', otActive:false, otNext:false, detGap:null, tyreSurface:82+Math.random()*8, tyreCore:80+Math.random()*6};
    if(p === myGrid){
      cars.push(Object.assign(base, {me:true, name:PLAYER_NAME, team:"Scuderia Aurora", skill:.93, tyre:startTyre,
        used:new Set(['S','M','H'].includes(startTyre)?[startTyre]:[]), pace:'norm', pitArmed:null, battery:72}));
    } else {
      const g = GRID[gi++];
      cars.push(Object.assign(base, {me:false, name:g[0], team:g[1], skill:g[2],
        tyre: Math.random()<.65?'M':(Math.random()<.5?'S':'H'), used:null, plan:null}));
    }
  }
  if(wx[0]>0) cars.forEach(cr=>{ if(!cr.me) cr.tyre = wx[0]===2?'W':'I'; });
  cars.forEach(cr=>{ if(!cr.me){
    cr.used = new Set(['S','M','H'].includes(cr.tyre)?[cr.tyre]:[]);
    cr.plan = { pitWear: 70 + Math.random()*14 };
  }});
  cars.forEach(cr=>resetTyreTemperatures(cr,wx[0],true));
  S = { ci, c, fx, wx, lap:1, cars, driverProfile:selectedDriverProfile||'metronome', sc:0, vsc:0, red:false, redDone:false, scMult, lateSC, started:false, starting:false,
    visualProgress:0, dryStreak: wx[0]===0?99:0, ended:false, atkNow:false, myWarn:0, myLaps:[], detectionGap:1.0,decisions:[],initializing:true, liveView:'circuit', radarOffset:0, weatherSeed:Math.floor(Math.random()*1000000), radarConfidence:82+Math.floor(Math.random()*12),
    metrics:{ slickRain:0, overWear:0, scHappened:false, scPit:false, alreadyStoppedAtSC:false,
      rainStart:null, rainReacts:[], spins:0, grid:myGrid+1, quiz:preQuizOK, wxEver:false, pen:0, energyStarve:0, energyCritical:0, otQualified:0, otUsed:0, otMissedLowBattery:0, rechargeLaps:0,minBattery:100,maxWear:0,hotLaps:0,coldLaps:0,paceLaps:{push:0,norm:0,save:0},energyLaps:{recharge:0,balanced:0,deploy:0} } };
  document.getElementById('race-gpname').textContent = `${c.flag} ${gpName(ci)} — 📚 ${L.t}`;
  document.getElementById('race-laps').textContent = c.laps;
  document.getElementById('radio').innerHTML = '';
  document.getElementById('fia').innerHTML = '';
  document.getElementById('redflagbox').classList.remove('show');
  setPace('norm');
  setEnergyMode('balanced');
  S.initializing=false;logDecision('start',fmt(t('decision.start'),tyLabel(startTyre)));
  document.getElementById('box-compounds').style.display='none';
  document.getElementById('pit-armed-line').textContent='';
  buildTrack(ci);
  fiaMsg(fmt(t('f.green'), wx[0]===0?t('f.dry'):t('f.wet')));
  radio(t('who.eng'), fmt(t('r.start'), myGrid+1, tyLabel(startTyre), L.ins), 'good');
  radio(t('who.eng'), fmt(t('driver.start'), driverTitle(S.driverProfile)), 'good');
  radio(t('who.drv'), t('r.driver0'), '');
  updateDriverLabels();
  if(c.maxStint) radio(t('who.eng'), fmt(t('r.maxstint'), c.maxStint), 'warn');
  if(wx[0]>0 && ['S','M','H'].includes(startTyre)) radio(t('who.eng'), t('r.wetslick'), 'alert');
  const idealWin = Math.round(70/(TYRES[startTyre].deg*c.deg));
  if(wx[0]===0) radio(t('who.eng'), fmt(t('r.window'), Math.max(3,idealWin-3), idealWin+4), '');
  showScreen('screen-race');
  setRaceView('circuit',true);
  renderRace(); drawLapChart(); renderLiveVisual();
  clearInterval(autoTimer); autoTimer=null;
  curSpeed = 'reale';
  setSpeed('reale');
  setSpeedControlsLocked(true);
  document.getElementById('btn-play').disabled=true;
  document.getElementById('btn-step').disabled=true;
  document.getElementById('btn-play').textContent=t('start.wait');
  const st=document.getElementById('race-status');
  st.className='status vsc'; st.textContent=t('st.grid'); setLed('sc');
  prepareStartOverlay();
}

function sleepMs(ms){ return new Promise(resolve=>setTimeout(resolve,ms)); }
function prepareStartOverlay(){
  const ov=document.getElementById('startoverlay');
  const pods=[...document.querySelectorAll('#startlights .lightpod')];
  pods.forEach(p=>p.classList.remove('on'));
  ov.classList.remove('lightsout');
  document.getElementById('startlights').classList.remove('active');
  document.getElementById('startmessage').textContent='';
  const btn=document.getElementById('btn-race-start');
  btn.style.display='inline-block'; btn.disabled=false; btn.textContent=t('start.button');
  document.getElementById('start-gridtag').textContent=t('start.gridtag');
  document.getElementById('start-title').textContent=t('start.ready');
  document.getElementById('start-sub').textContent=t('start.sub');
  ov.classList.add('show');
}
async function beginStartSequence(){
  if(!S || S.started || S.starting) return;
  S.starting=true;
  const ov=document.getElementById('startoverlay');
  const btn=document.getElementById('btn-race-start');
  const lights=document.getElementById('startlights');
  const msg=document.getElementById('startmessage');
  const pods=[...lights.querySelectorAll('.lightpod')];
  btn.disabled=true; btn.style.display='none';
  lights.classList.add('active');
  msg.textContent=t('start.hold');
  for(let i=0;i<pods.length;i++){
    await sleepMs(620);
    if(!S || S.started) return;
    pods[i].classList.add('on');playTone(360+i*45,.08,'square');
  }
  await sleepMs(850+Math.random()*1150);
  pods.forEach(p=>p.classList.remove('on'));playTone(820,.18,'square');
  ov.classList.add('lightsout');
  msg.textContent=t('start.out');
  await sleepMs(520);
  if(!S) return;
  ov.classList.remove('show','lightsout');
  S.started=true; S.starting=false;
  document.getElementById('btn-play').disabled=false;
  document.getElementById('btn-step').disabled=false;
  setSpeedControlsLocked(false);
  document.getElementById('btn-play').textContent=t('btn.pause');
  fiaMsg(t('start.out'));
  startTrackAnim();
  startAuto();
}

function fiaMsg(txt){
  const r = document.getElementById('fia');
  const d = document.createElement('div');
  d.className = 'rmsg';
  d.innerHTML = `<span class="who">${fmt(t('f.lap'), S?Math.min(S.lap,S.c.laps):1)}</span>${txt}`;
  r.prepend(d);
  while(r.children.length > 40) r.lastChild.remove();
}
function radio(who, txt, cls){
  const r = document.getElementById('radio');playTone(cls==='alert'?260:cls==='good'?620:430,.045,'sine');
  const d = document.createElement('div');
  d.className = 'rmsg' + (cls?' '+cls:'');
  d.innerHTML = `<span class="who">${who}:</span>${txt}`;
  r.prepend(d);
  while(r.children.length > 40) r.lastChild.remove();
}
let chatCooldown = 0;
function driverChat(wx, me){
  const p=driverProfile();
  if(chatCooldown-- > 0) return;
  if(p.id==='adaptive'){
    let key='driver.radio.adaptive.ok';
    if(me.wear>55) key='driver.radio.adaptive.wear';
    else if(me.battery<30) key='driver.radio.adaptive.energy';
    else if(wx>0) key='driver.radio.adaptive.grip';
    radio(t('who.drv'),t(key),me.wear>70||me.battery<20?'warn':'');
    chatCooldown=3+Math.floor(Math.random()*3);
    return;
  }
  if(Math.random()<.42){
    const key=p.id==='manager'?'driver.radio.manager':p.id==='attacker'?'driver.radio.attacker':'driver.radio.metronome';
    radio(t('who.drv'),t(key),'');
    chatCooldown=4+Math.floor(Math.random()*4);
    return;
  }
  let pool = 'chat.ok';
  if(wx>0 && ['S','M','H'].includes(me.tyre)) pool = 'chat.rain';
  else if(me.wear>70) pool = 'chat.wear';
  else if(S.c.cold && me.fresh>0) pool = 'chat.cold';
  else if(S.sc>0) pool = 'chat.sc';
  else if(Math.random()<0.3) pool = 'chat.traffic';
  radio(t('who.drv'), pick(pool), '');
  chatCooldown = 5 + Math.floor(Math.random()*4);
}

function setSpeedControlsLocked(locked){
  document.querySelectorAll('.speedbtn').forEach(b=>{ b.disabled = locked; });
  updateSpeedInfo();
}
function setSpeed(spd){
  if(S && !S.started && spd !== 'reale') return;
  curSpeed = spd;
  document.querySelectorAll('.speedbtn').forEach(b=>b.classList.toggle('sel', b.dataset.spd===spd));
  updateSpeedInfo();
  if(S && !S.ended && autoTimer){ startAuto(); }
}
function setPace(p){
  document.querySelectorAll('.pacebtn').forEach(b=>{ if(b.dataset.pace) b.classList.toggle('sel', b.dataset.pace===p); });
  if(S){const me=S.cars.find(x=>x.me);if(me.pace!==p)logDecision('pace',fmt(t('decision.pace'),t('pace.'+(p==='norm'?'norm':p))));me.pace=p}
}
function energyModeLabel(mode){ return t('energy.mode.'+mode); }
function setEnergyMode(mode){
  if(!['recharge','balanced','deploy'].includes(mode)) return;
  document.querySelectorAll('.energybtn').forEach(b=>b.classList.toggle('sel', b.dataset.energy===mode));
  if(S){
    const me=S.cars.find(x=>x.me);if(me.energyMode!==mode)logDecision('energy',fmt(t('decision.energy'),energyModeLabel(mode)));me.energyMode=mode;
    if(S.started) radio(t('who.you'), fmt(t('r.energycall'), energyModeLabel(mode)), mode==='recharge'?'warn':mode==='deploy'?'good':'');
    renderEnergyUI();
  }
}
function useAttack(){
  if(!S || !S.started || S.ended || S.atkNow) return;
  const me=S.cars.find(x=>x.me);
  if(S.sc>0 || S.vsc>0 || S.red || !me.otActive) return;
  if(me.battery < 24){
    S.metrics.otMissedLowBattery++;
    radio(t('who.eng'), t('r.otnoenergy'), 'alert');
    renderEnergyUI();
    return;
  }
  S.atkNow = true;
  S.metrics.otUsed++;logDecision('overtake',fmt(t('decision.ot'),Math.round(me.battery)));
  radio(t('who.you'), t('ot.call'), 'good');
  radio(t('who.drv'), t('r.atk'), 'good');
  renderEnergyUI();
}
function levelWord(v){ return v<.58?t('energy.low'):v<.88?t('energy.med'):t('energy.high'); }
function renderEnergyUI(){
  if(!S) return;
  const me=S.cars.find(x=>x.me), cfg=ENERGY_TRACK[S.ci];
  const pct=Math.max(0,Math.min(100,me.battery));
  const p=document.getElementById('battery-pct'), bar=document.getElementById('batterybar');
  if(p) p.textContent=Math.round(pct);
  if(bar){ bar.style.width=pct+'%'; bar.className='batterybar'+(pct<15?' critical':pct<32?' low':''); }
  const mi=document.getElementById('energy-mode-info'); if(mi) mi.innerHTML='<b>'+energyModeLabel(me.energyMode)+'</b>';
  const ti=document.getElementById('energy-track-info'); if(ti) ti.textContent=fmt(t('energy.track'),levelWord(cfg.harvest),levelWord(cfg.straight),levelWord(cfg.traction));
  document.querySelectorAll('.energybtn').forEach(b=>b.classList.toggle('sel', b.dataset.energy===me.energyMode));
  const box=document.getElementById('overtakebox'), status=document.getElementById('overtake-status'), detail=document.getElementById('overtake-detail'), btn=document.getElementById('btn-atk');
  if(!box||!status||!detail||!btn) return;
  box.className='overtakebox blocked';
  let can=false;
  if(!S.started){ status.textContent=t('ot.off'); detail.textContent=t('ot.start'); }
  else if(S.sc>0||S.vsc>0||S.red){ status.textContent=t('ot.off'); detail.textContent=t('ot.sc'); }
  else if(S.atkNow){ box.className='overtakebox active'; status.textContent=t('ot.armed'); detail.textContent=fmt(t('ot.range'),(me.detGap??0).toFixed(2)); }
  else if(me.otActive){
    box.className='overtakebox active'; status.textContent=t('ot.active');
    detail.textContent=me.battery<24?t('ot.low'):fmt(t('ot.range'),(me.detGap??0).toFixed(2));
    can=me.battery>=24;
  } else if(me.detGap===null){ status.textContent=t('ot.off'); detail.textContent=t('ot.leader'); }
  else if(me.detGap<=1.5){ box.className='overtakebox near'; status.textContent=t('ot.off'); detail.textContent=fmt(t('ot.near'),me.detGap.toFixed(2),Math.max(0,me.detGap-S.detectionGap).toFixed(2)); }
  else { status.textContent=t('ot.off'); detail.textContent=fmt(t('ot.far'),me.detGap.toFixed(2)); }
  btn.disabled=!can; btn.className='btn otbutton'+(can?' ready':'');
  btn.textContent=S.atkNow?t('ot.armed'):t('ot.call');
}
function toggleBoxMenu(){
  const el = document.getElementById('box-compounds');
  el.style.display = el.style.display==='none' ? 'flex' : 'none';
  renderPitForecast();
}
function armPit(tk){
  if(!S || !S.started) return;
  const me = S.cars.find(x=>x.me);
  me.pitArmed = tk;
  document.getElementById('box-compounds').style.display='none';
  document.getElementById('pit-armed-line').innerHTML = `🛠️ → <b>${tyLabel(tk)}</b> <button class="btn" style="padding:2px 8px;font-size:11px;" onclick="cancelPit()">✕</button>`;
  radio(t('who.you'), fmt(t('r.boxarm'), tyLabel(tk)), 'warn');logDecision('pit',fmt(t('decision.pit'),tyLabel(tk)));renderPitForecast(tk);
}
function cancelPit(){
  S.cars.find(x=>x.me).pitArmed = null;
  document.getElementById('pit-armed-line').textContent='';
  radio(t('who.eng'), t('r.stayout'), '');logDecision('pit',t('decision.cancelpit'));
}
function startAuto(){
  if(!S || !S.started || S.ended) return;
  clearInterval(autoTimer);
  autoTimer = setInterval(()=>{ if(S && !S.ended && !S.red) lapTick(); }, getLapDelay());
  document.getElementById('btn-play').textContent = t('btn.pause');
}
function toggleAuto(){
  if(!S || !S.started) return;
  if(autoTimer){ clearInterval(autoTimer); autoTimer=null; document.getElementById('btn-play').textContent=t('btn.resume'); }
  else startAuto();
}
function manualLap(){ if(S && S.started && !S.ended && !S.red) lapTick(); }
function abandonRace(){
  if(!S) return;
  const ov=document.getElementById('startoverlay'); if(ov) ov.classList.remove('show','lightsout');
  clearInterval(autoTimer); autoTimer=null;
  career.strat[S.ci] = 99;
  endRace(true);
}

let redChoice = null;
function triggerRed(){
  S.red = true; S.redDone = true; S.sc = 0; S.vsc = 0; redChoice = null; S.atkNow=false;
  S.cars.forEach(cr=>{ cr.otActive=false; cr.otNext=false; cr.battery=Math.min(100,cr.battery+10); });
  clearInterval(autoTimer); autoTimer = null;
  document.getElementById('btn-play').textContent = t('btn.resume');
  const act = S.cars.filter(x=>!x.out).sort((a,b)=>a.time-b.time);
  act.forEach((cr,i)=>{ cr.time = act[0].time + i*0.8; });
  S.cars.forEach(cr=>{ if(!cr.me && !cr.out){
    const wx = S.wx[S.lap];
    cr.tyre = wx===2?'W': wx===1?'I' : pickDryCompound(cr, S.c);
    cr.wear = 0; cr.stint = 0; cr.fresh = 2; cr.dmg = 0;
    if(['S','M','H'].includes(cr.tyre)) cr.used.add(cr.tyre);
  }});
  fiaMsg(t('f.red'));
  radio(t('who.eng'), t('r.red'), 'alert');
  document.getElementById('redflagbox').classList.add('show');
  document.getElementById('redchoice').textContent = t('red.none');
  renderRace();
}
function redTyre(tk){
  redChoice = tk;logDecision('red',fmt(t('decision.red'),tyLabel(tk)));
  document.getElementById('redchoice').innerHTML = t('red.chosen') + `<b>${tyLabel(tk)}</b>` + t('red.free');
}
function resumeFromRed(){
  const me = S.cars.find(x=>x.me);
  if(redChoice){
    me.tyre = redChoice; me.wear = 0; me.stint = 0; me.fresh = 2; me.dmg = 0; resetTyreTemperatures(me,S.wx[S.lap]||0,false);
    if(['S','M','H'].includes(redChoice)) me.used.add(redChoice);
    radio(t('who.eng'), t('r.rednew'), 'good');
  } else radio(t('who.eng'), t('r.redold'), 'warn');
  S.red = false;
  document.getElementById('redflagbox').classList.remove('show');
  fiaMsg(t('f.redgo'));
  startAuto();
}

function simulateEnergy(car, wx, pace, isPlayer){
  const cfg=ENERGY_TRACK[S.ci];
  const prof=isPlayer?driverProfile():null;
  const neutral=S.sc>0||S.vsc>0||S.red;
  let mode=isPlayer?car.energyMode:(car.battery<28?'recharge':(car.otActive&&car.battery>38?'deploy':'balanced'));
  let harvest=8*cfg.harvest, demand=8, timeDelta=0, wearDelta=0, usedOT=false;
  if(neutral){ harvest=13*cfg.harvest; demand=1.5; mode='recharge'; }
  else if(mode==='recharge'){
    harvest=14*cfg.harvest; demand=3; timeDelta+=.43+.12*cfg.straight; wearDelta-=.08;
    if(car.otActive) harvest+=4; // extra recharge allowance while Overtake is activated
  }else if(mode==='deploy'){
    harvest=6.2*cfg.harvest; demand=15; timeDelta-=.32+.28*cfg.straight;
    if(cfg.traction>.65 && (pace==='push'||wx>0||car.wear>65)) wearDelta+=.10+.10*cfg.traction;
  }
  if(!neutral){
    usedOT=isPlayer?S.atkNow:(car.otActive&&car.battery>=28&&Math.random()<.68);
    if(usedOT){
      harvest+=4; // simplified representation of the additional 0.5MJ recharge allowance
      demand+=18;
      const wetFactor=wx===0?1:(wx===1?.72:.48);
      timeDelta-=(.45+.55*cfg.straight)*wetFactor*(prof?prof.overtakeGain:1);
      if(cfg.traction>.65 && (wx>0||car.wear>65)) wearDelta+=.10*(prof?prof.pushWear:1);
    }
  }
  if(prof && !neutral) demand/=prof.energyEff;
  const available=car.battery+harvest;
  if(demand>available){
    const shortage=demand-available;
    timeDelta+=.45+shortage*.035; // clipping / curtailed deployment
    demand=available;
    if(isPlayer) S.metrics.energyStarve++;
  }
  car.battery=Math.max(0,Math.min(100,available-demand));
  if(isPlayer){
    if(mode==='recharge') S.metrics.rechargeLaps++;
    if(car.battery<15) S.metrics.energyCritical++;
  }
  return {timeDelta,wearDelta,usedOT,mode};
}

const TYRE_THERMAL={S:{ideal:103,low:88,high:116},M:{ideal:99,low:84,high:112},H:{ideal:95,low:80,high:108},I:{ideal:75,low:61,high:88},W:{ideal:66,low:52,high:79}};
function resetTyreTemperatures(car,wx,onGrid){
  const cfg=TYRE_THERMAL[car.tyre]||TYRE_THERMAL.M;
  const wet=wx>0, base=wet?cfg.ideal-5:cfg.ideal-8;
  car.tyreSurface=base+(onGrid?Math.random()*4: -8+Math.random()*3);
  car.tyreCore=base-3+(onGrid?Math.random()*3:-5+Math.random()*2);
}
function tyreThermalState(car){
  const cfg=TYRE_THERMAL[car.tyre]||TYRE_THERMAL.M;
  if(car.tyreSurface<cfg.low||car.tyreCore<cfg.low-4)return 'cold';
  if(car.tyreSurface>cfg.high||car.tyreCore>cfg.high-2)return 'hot';
  return 'ok';
}
function thermalEffects(car){
  const cfg=TYRE_THERMAL[car.tyre]||TYRE_THERMAL.M,state=tyreThermalState(car);
  if(state==='cold')return{timePenalty:.24+Math.max(0,cfg.low-car.tyreSurface)*.025,wearMult:1.08,state};
  if(state==='hot')return{timePenalty:.18+Math.max(0,car.tyreSurface-cfg.high)*.032,wearMult:1.18,state};
  return{timePenalty:0,wearMult:1,state};
}
function updateTyreThermals(car,wx,pace){
  const cfg=TYRE_THERMAL[car.tyre]||TYRE_THERMAL.M,neutral=S.sc>0||S.vsc>0||S.red;
  const slick=['S','M','H'].includes(car.tyre),track=S.c.temp+(wx>0?-7:0);
  let target=cfg.ideal+(pace==='push'?8:pace==='save'?-5:0)+(car.energyMode==='deploy'?4:car.energyMode==='recharge'?-2:0);
  if(neutral)target-=18;
  if(wx>0&&slick)target-=10;
  if(wx===0&&!slick)target+=15;
  target+=(track-30)*.18;
  const noise=(Math.random()-.5)*2;
  car.tyreSurface+=(target-car.tyreSurface)*(neutral?.24:.38)+noise;
  car.tyreCore+=(car.tyreSurface-3-car.tyreCore)*(neutral?.08:.15);
  car.tyreSurface=Math.max(35,Math.min(135,car.tyreSurface));car.tyreCore=Math.max(35,Math.min(125,car.tyreCore));
}

function lapTick(){
  const c = S.c, wx = S.wx[S.lap] || 0;
  const prevWx = S.wx[S.lap-1] ?? wx;
  const M = S.metrics;
  const me0 = S.cars.find(x=>x.me);
  const neutralThisLap = S.sc>0 || S.vsc>0 || S.red;
  if(me0.otActive){ M.otQualified++; if(me0.battery<24) M.otMissedLowBattery++; }
  if(wx>0){ M.wxEver = true; if(prevWx===0) M.rainStart = S.lap; }
  if(wx===0) S.dryStreak++; else S.dryStreak = 0;
  if(wx>0 && prevWx===0){ radio(t('who.eng'), wx===2?t('r.rainstart2'):t('r.rainstart1'), 'alert'); fiaMsg(t('f.rain')); }
  if(wx===2 && prevWx===1) radio(t('who.eng'), t('r.rainup'), 'alert');
  if(wx===0 && prevWx>0){ radio(t('who.eng'), t('r.drying'), 'warn'); fiaMsg(t('f.improve')); }

  if(Math.random()<0.05 && S.sc===0 && S.vsc===0) fiaMsg(pick('f.flavor'));
  if(me0.pace==='push' && wx===0 && S.sc===0 && Math.random()<0.06*driverProfile().errorRisk){
    S.myWarn++;
    if(S.myWarn<3){ fiaMsg(fmt(t('f.tlwarn'), S.myWarn)); radio(t('who.eng'), fmt(t('r.tlwarn'), S.myWarn), 'warn'); }
    else { S.myWarn=0; me0.pen+=5; M.pen+=5; fiaMsg(t('f.tlpen')); radio(t('who.eng'), t('r.tlpen'), 'alert'); }
  }

  if(S.sc===0 && S.vsc===0){
    const scNow = (S.lateSC && S.lap===S.lateSC) || (Math.random() < c.sc*S.scMult && S.lap > 2 && S.lap < c.laps-2);
    const vscNow = !scNow && Math.random() < c.sc*0.8 && S.lap>2 && S.lap<c.laps-2;
    if(scNow && !S.redDone && Math.random()<0.18 && S.lap < c.laps-6){
      triggerRed(); return;
    } else if(scNow){
      S.sc = 3 + Math.floor(Math.random()*2);
      M.scHappened = true;
      M.alreadyStoppedAtSC = M.alreadyStoppedAtSC || (me0.pits>0 && me0.wear<45);
      fiaMsg(fmt(t('f.sc'), 2+Math.floor(Math.random()*12)));
      radio(t('who.eng'), t('r.sc'), 'warn');
      const act = S.cars.filter(x=>!x.out).sort((a,b)=>a.time-b.time);
      act.forEach((cr,i)=> cr.time = act[0].time + i*0.9);
    } else if(vscNow){
      S.vsc = 1 + Math.floor(Math.random()*2);
      M.scHappened = true;
      fiaMsg(t('f.vsc'));
      radio(t('who.eng'), t('r.vsc'), 'warn');
    }
  }

  const order = S.cars.filter(x=>!x.out).sort((a,b)=>a.time-b.time);

  S.cars.forEach(car=>{
    if(car.out) return;
    const T = TYRES[car.tyre];
    const slick = ['S','M','H'].includes(car.tyre);
    let lapt = 92 - car.skill*4;
    if(slick) lapt += T.pace;
    if(c.cold && car.tyre==='H') lapt += 0.9;
    if(c.cold && car.tyre==='S') lapt -= 0.15;
    lapt += car.wear*0.022;
    if(car.wear>75) lapt += (car.wear-75)*0.20;
    lapt -= S.lap*0.035;
    if(wx===0) lapt -= Math.min(0.5, S.lap*0.01);
    if(car.fresh>0){ lapt += 0.35*car.fresh; car.fresh--; }
    if(car.dmg>0) lapt += car.dmg;
    if(wx===0){ if(car.tyre==='I') lapt+=2.6; if(car.tyre==='W') lapt+=5.5; }
    if(wx===1){ if(slick) lapt+=4.5; if(car.tyre==='W') lapt+=1.6; }
    if(wx===2){ if(slick) lapt+=12; if(car.tyre==='I') lapt+=3.2; }
    const pace = car.me ? car.pace : 'norm';
    const prof=car.me?driverProfile():null;
    let wearMul = 1;
    if(pace==='push'){ lapt -= 0.35*(prof?prof.pushGain:1); wearMul = 1+0.45*(prof?prof.pushWear:1); }
    if(pace==='save'){ lapt += 0.45; wearMul = 0.65*(prof?Math.min(1.08,prof.tyreWear):1); }
    const therm=thermalEffects(car);lapt+=therm.timePenalty;wearMul*=therm.wearMult;
    const energy = simulateEnergy(car, wx, pace, car.me);
    lapt += energy.timeDelta; wearMul = Math.max(.2, wearMul + energy.wearDelta);
    lapt += (Math.random()-0.5)*0.8*(prof?prof.consistency:1);
    const idx = order.indexOf(car);
    if(idx>0 && (order[idx].time - order[idx-1].time) < 1.2) lapt += c.ot;
    if(S.sc>0){ lapt = 118 + Math.random(); wearMul = 0.2; }
    else if(S.vsc>0){ lapt = 105 + Math.random(); wearMul = 0.3; }

    if(car.me){
      if(slick && wx>0) M.slickRain++;
      if(car.wear>85) M.overWear++;
    }
    car.stint++;
    if(c.maxStint && slick && car.stint > c.maxStint){
      lapt += 1.5; car.wear = Math.min(100, car.wear+4);
      if(car.me && car.stint === c.maxStint+1) radio(t('who.eng'), fmt(t('r.maxwarn'), c.maxStint), 'alert');
    }
    if(car.me && c.maxStint && slick && car.stint === c.maxStint-2) radio(t('who.eng'), t('r.maxsoon'), 'warn');

    if(slick && wx>0 && S.sc===0 && S.vsc===0){
      const r = Math.random();
      let spinP = wx===2?0.16:0.05, dnfP = wx===2?0.03:0.005;
      if(car.me){ spinP*=driverProfile().wetRisk; dnfP*=driverProfile().wetRisk; }
      if(r < dnfP){ car.out = true;
        if(car.me) radio(t('who.eng'), t('r.wall'), 'alert');
        else fiaMsg(fmt(t('f.crash'), car.name));
      } else if(r < dnfP+spinP){ lapt += 9;
        if(car.me){ M.spins++; radio(t('who.drv'), t('r.spin'), 'alert'); }
      }
    }
    if((S.lap===1 || (S.sc===1)) && Math.random()<(car.me?0.05*driverProfile().contactRisk:0.03) && car.dmg===0){
      car.dmg = 0.8;
      if(car.me){ radio(t('who.drv'), t('r.contact'), 'alert'); fiaMsg(t('f.contact')); }
    }
    if(!car.out && Math.random()<0.0007){ car.out=true;
      if(!car.me) fiaMsg(fmt(t('f.tech'), car.name));
      else radio(t('who.eng'), t('r.pu'), 'alert'); }
    if(car.out) return;

    updateTyreThermals(car,wx,pace);
    if(car.me){const ts=tyreThermalState(car);if(ts==='hot')M.hotLaps++;else if(ts==='cold')M.coldLaps++;}
    car.wear = Math.min(100, car.wear + T.deg * c.deg * wearMul * (slick && wx>0 ? 1.6 : 1) * (car.me?driverProfile().tyreWear:1));

    if(!car.me){
      let wantPit = null;
      if(slick && wx>0 && Math.random() < (wx===2?0.85:0.45)) wantPit = wx===2?'W':'I';
      else if(car.tyre==='I' && wx===2 && Math.random()<0.5) wantPit='W';
      else if(car.tyre==='W' && wx===1 && Math.random()<0.4) wantPit='I';
      else if(!slick && wx===0 && S.dryStreak>2 && Math.random()<0.55) wantPit = pickDryCompound(car, c);
      else if(slick && car.wear > car.plan.pitWear && S.lap < c.laps-3) wantPit = pickDryCompound(car, c);
      else if(c.maxStint && slick && car.stint >= c.maxStint-1) wantPit = pickDryCompound(car, c);
      else if((S.sc>0||S.vsc>0) && slick && car.wear>45 && Math.random()<0.55) wantPit = pickDryCompound(car, c);
      else if(car.dmg>0 && Math.random()<0.5) wantPit = slick?pickDryCompound(car,c):car.tyre;
      if(wantPit) doPit(car, wantPit);
    } else if(car.pitArmed){
      doPit(car, car.pitArmed);
      car.pitArmed = null;
      document.getElementById('pit-armed-line').textContent='';
    }
    car.time += lapt;
    if(car.me) S.myLaps.push({t:lapt, ty:car.tyre, sc:(S.sc>0||S.vsc>0), pit:false});
  });

  const detectionOrder = S.cars.filter(x=>!x.out).sort((a,b)=>a.time-b.time);
  detectionOrder.forEach((car,i)=>{
    const oldActive=car.otActive;
    car.detGap=i===0?null:Math.max(0,car.time-detectionOrder[i-1].time);
    car.otNext=!neutralThisLap && car.detGap!==null && car.detGap<=S.detectionGap;
    if(car.me){
      if(car.otNext && (!oldActive || S.lap%4===0)) radio(t('who.eng'),fmt(t('r.otqual'),car.detGap.toFixed(2),Math.round(car.battery)),'good');
      else if(!car.otNext && oldActive && car.detGap!==null && car.detGap<=1.5) radio(t('who.eng'),fmt(t('r.otlost'),car.detGap.toFixed(2),Math.max(0,car.detGap-S.detectionGap).toFixed(2)),'warn');
      if(car.battery<12 && S.lap%3===0) radio(t('who.eng'),t('r.energycrit'),'alert');
    }
  });
  detectionOrder.forEach(car=>{ car.otActive=car.otNext; });
  if(S.atkNow){ S.atkNow=false; }
  if(S.sc>0){ S.sc--; if(S.sc===0){ fiaMsg(t('f.scin')); radio(t('who.eng'), t('r.scin'), 'good'); } }
  else if(S.vsc>0){ S.vsc--; if(S.vsc===0) fiaMsg(t('f.vscend')); }
  const me = S.cars.find(x=>x.me);
  M.minBattery=Math.min(M.minBattery,me.battery);M.maxWear=Math.max(M.maxWear,me.wear);M.paceLaps[me.pace]=(M.paceLaps[me.pace]||0)+1;M.energyLaps[me.energyMode]=(M.energyLaps[me.energyMode]||0)+1;
  if(me.wear>80 && !me.out && S.lap%3===0) radio(t('who.eng'), t('r.cliffwarn'), 'warn');
  if(!me.out) driverChat(wx, me);

  const lead = S.cars.filter(x=>!x.out).sort((a,b)=>a.time-b.time)[0];
  S.cars.forEach(cr=>{ if(!cr.out) cr.tp = S.lap - (cr.time - lead.time)/92; });

  S.lap++;
  renderRace(); drawLapChart();
  if(me.out){ career.strat[S.ci]=99; endRace(false); return; }
  if(S.lap > S.c.laps) endRace(false);
}

function pickDryCompound(car, c){
  const remaining = c.laps - S.lap;
  let tk = remaining < 14 ? 'S' : remaining < 30 ? 'M' : 'H';
  if(c.cold && tk==='H') tk='M';
  if(car.used && car.used.size===1 && car.used.has(tk)) tk = tk==='M'?'H':'M';
  if(c.cold && tk==='H') tk='S';
  return tk;
}
function doPit(car, tyre){
  const mult = S.sc>0 ? 0.55 : S.vsc>0 ? 0.7 : 1;
  let loss = S.c.pit * mult;
  if(car.dmg>0){ loss += 3; car.dmg = 0; if(car.me) radio(t('who.eng'), t('r.wing'), ''); }
  car.time += loss;
  car.tyre = tyre; car.wear = 0; car.pits++; car.stint = 0; car.fresh = 2; resetTyreTemperatures(car,S.wx[S.lap]||0,false);
  if(['S','M','H'].includes(tyre)) car.used && car.used.add(tyre);
  if(car.me){
    if(S.myLaps.length) S.myLaps[S.myLaps.length-1].pit = true;
    if(S.sc>0 || S.vsc>0) S.metrics.scPit = true;
    if(S.metrics.rainStart!==null && ['I','W'].includes(tyre) && S.metrics.rainReacts.length < 5){
      S.metrics.rainReacts.push(S.lap - S.metrics.rainStart);
      S.metrics.rainStart = null;
    }
    radio(t('who.eng'), fmt(t('r.pitdone'), tyLabel(tyre), loss.toFixed(1), S.sc>0?t('r.pitsc'):S.vsc>0?t('r.pitvsc'):''), (S.sc>0||S.vsc>0)?'good':'');logDecision('pit',fmt(t('decision.pitdone'),tyLabel(tyre),loss.toFixed(1)));
  }
}
/* ============ Render (i18n) ============ */
function fmtGap(g){ return g<=0 ? t('gap.leader') : '+'+g.toFixed(1); }
function renderRace(){
  updateDriverLabels();
  const wx = S.wx[Math.min(S.lap, S.wx.length-1)];
  document.getElementById('race-lap').textContent = Math.min(S.lap, S.c.laps);
  const st = document.getElementById('race-status');
  if(S.red){ st.className='status red'; st.textContent=t('st.red'); setLed('red'); }
  else if(S.sc>0){ st.className='status sc'; st.textContent=t('st.sc'); setLed('sc'); }
  else if(S.vsc>0){ st.className='status vsc'; st.textContent=t('st.vsc'); setLed('sc'); }
  else if(wx===2){ st.className='status rain'; st.textContent=t('st.rain2'); setLed('rain'); }
  else if(wx===1){ st.className='status rain'; st.textContent=t('st.rain1'); setLed('rain'); }
  else { st.className='status green'; st.textContent=t('st.green'); setLed('green'); }
  const fx = document.getElementById('rainfx');
  fx.className = 'rainfx' + (wx===1?' on1':wx===2?' on2':'');
  document.getElementById('wx-main').innerHTML = wx===0?t('wx.dry'):wx===1?t('wx.r1'):t('wx.r2');
  let radar = t('wx.none');
  for(let k=1;k<=10;k++){
    const f = S.wx[S.lap+k];
    if(f!==undefined && f!==wx){
      const est = Math.max(1, k + Math.round((Math.random()-0.5)*3));
      radar = f>wx ? fmt(t('wx.inc'), f===2?t('wx.heavy'):t('wx.rain'), est) : fmt(t('wx.better'), est);
      break;
    }
  }
  document.getElementById('wx-sub').textContent = `${t('wx.track')} ${S.c.temp + (wx>0?-6:0)}°C · ${radar}`;
  const me = S.cars.find(x=>x.me);
  document.getElementById('my-tyre').textContent = tyLabel(me.tyre);
  document.getElementById('my-tyredot').className = 'tyredot ty-'+me.tyre;
  document.getElementById('my-wear').textContent = Math.round(me.wear);
  document.getElementById('wearbar').style.width = me.wear+'%';
  document.getElementById('my-stint').textContent = S.c.maxStint ? `· ${t('stint')} ${me.stint}/${S.c.maxStint}` : `· ${t('stint')} ${me.stint} ${t('stint.laps')}`;
  let extra = [];
  if(me.fresh>0) extra.push(t('x.cold'));
  if(me.dmg>0) extra.push(t('x.dmg'));
  if(me.pen>0) extra.push(fmt(t('x.pen'), me.pen));
  if(me.battery<15) extra.push(t('x.batt'));
  document.getElementById('my-extra').innerHTML = extra.join(' · ') || t('ok.all');
  renderThermalUI(me);renderEnergyUI();renderAdvisor();renderPitForecast();updateInfoSources();renderLiveVisual();
  const order = S.cars.slice().sort((a,b)=> (a.out?1:0)-(b.out?1:0) || a.time-b.time);
  const lead = order.find(x=>!x.out);
  const tw = document.getElementById('tower'); tw.innerHTML='';
  order.forEach((car,i)=>{
    const d = document.createElement('div');
    d.className = 'trow' + (car.me?' me':'') + (car.out?' out':'');
    d.innerHTML = `<span class="pos">${car.out?'—':'P'+(i+1)}</span>
      <span class="teamdot" style="background:${TEAMCOL[car.team]||'#888'}"></span>
      <span style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${car.name}</span>
      <span class="tyredot ty-${car.tyre}"></span>
      <span class="gap">${car.out?'OUT':fmtGap(car.time-lead.time)}</span>
      <span class="pits">${car.pits}🛞</span>`;
    tw.appendChild(d);
  });
}

let liveView='circuit',radarOffset=0;
const RACE_VIEWS=['circuit','radar','onboard','wheel'];
function raceViewName(v){return t('view.'+v)}
function setRaceView(view,silent){
  if(!RACE_VIEWS.includes(view))view='circuit';liveView=view;if(S){S.liveView=view;S.radarOffset=radarOffset;}
  document.querySelectorAll('.viewtab').forEach(b=>{const on=b.dataset.view===view;b.classList.toggle('sel',on);b.setAttribute('aria-selected',on?'true':'false')});
  const stage=document.getElementById('visualstage');if(stage)stage.dataset.view=view;
  document.querySelectorAll('.raceview').forEach(c=>c.classList.remove('active'));
  const id=view==='circuit'?'trackcv':view==='radar'?'radarcv':view==='wheel'?'wheelcv':'drivecv';document.getElementById(id)?.classList.add('active');
  const rc=document.getElementById('radar-controls');if(rc)rc.hidden=view!=='radar';
  const lab=document.getElementById('visual-view-label');if(lab)lab.textContent=t('view.label.'+view);
  if(!silent&&S)logDecision('view',fmt(t('decision.view'),raceViewName(view)));
  renderLiveVisual();
}
function setRadarOffset(mins){radarOffset=[0,5,10,15].includes(+mins)?+mins:0;if(S)S.radarOffset=radarOffset;document.querySelectorAll('.radarbtn').forEach(b=>b.classList.toggle('sel',+b.dataset.min===radarOffset));if(S)logDecision('radar',fmt(t('decision.radar'),radarOffset));drawWeatherRadar();}
function renderLiveVisual(){
  if(!S)return;
  const stored=RACE_VIEWS.includes(S.liveView)?S.liveView:'circuit';
  const v=stored||liveView;liveView=v;S.liveView=v;radarOffset=S.radarOffset??radarOffset;
  if(v==='circuit')drawTrack();else if(v==='radar')drawWeatherRadar();else if(v==='wheel')drawWheelView();else drawDriverView();
}
function canvasCtx(id){const cv=document.getElementById(id);return cv?[cv,cv.getContext('2d')]:[null,null]}
function seeded01(n){const x=Math.sin((S?.weatherSeed||1)*.001+n*12.9898)*43758.5453;return x-Math.floor(x)}
function forecastLapForMinutes(mins){const minPerLap=90/Math.max(1,S.c.laps);return Math.min(S.wx.length-1,S.lap+Math.round(mins/minPerLap))}
function radarConfidenceFor(mins){const volatility=S.wx.slice(Math.max(0,S.lap-2),Math.min(S.wx.length,S.lap+12)).reduce((a,v,i,ar)=>a+(i&&v!==ar[i-1]?1:0),0);return Math.max(38,Math.min(96,(S.radarConfidence||86)-mins*2.25-volatility*2.4))}
function roundRectPath(ctx,x,y,w,h,r){r=Math.max(0,Math.min(r,Math.min(w,h)/2));ctx.beginPath();ctx.moveTo(x+r,y);ctx.arcTo(x+w,y,x+w,y+h,r);ctx.arcTo(x+w,y+h,x,y+h,r);ctx.arcTo(x,y+h,x,y,r);ctx.arcTo(x,y,x+w,y,r);ctx.closePath()}
function fillRound(ctx,x,y,w,h,r,fill,stroke){roundRectPath(ctx,x,y,w,h,r);if(fill){ctx.fillStyle=fill;ctx.fill()}if(stroke){ctx.strokeStyle=stroke;ctx.stroke()}}
function drawWeatherRadar(){
  const [cv,ctx]=canvasCtx('radarcv');if(!cv||!ctx||!S)return;const w=cv.width,h=cv.height,fl=forecastLapForMinutes(radarOffset),intensity=S.wx[fl]||0,conf=Math.round(radarConfidenceFor(radarOffset));ctx.clearRect(0,0,w,h);
  const bg=ctx.createLinearGradient(0,0,0,h);bg.addColorStop(0,'#07131d');bg.addColorStop(1,'#02070b');ctx.fillStyle=bg;ctx.fillRect(0,0,w,h);
  ctx.strokeStyle='rgba(100,160,190,.12)';ctx.lineWidth=1;for(let x=20;x<w;x+=40){ctx.beginPath();ctx.moveTo(x,0);ctx.lineTo(x,h);ctx.stroke()}for(let y=20;y<h;y+=40){ctx.beginPath();ctx.moveTo(0,y);ctx.lineTo(w,y);ctx.stroke()}
  const drift=(S.lap+radarOffset*.7)*9;const cellCount=intensity===0?2:intensity===1?4:6;
  for(let i=0;i<cellCount;i++){
    const baseX=(seeded01(i+3)*w+drift*(.65+seeded01(i+15)))%(w+240)-120,baseY=55+seeded01(i+31)*(h-105),r=(intensity===2?80:55)+seeded01(i+50)*65;
    const g=ctx.createRadialGradient(baseX,baseY,5,baseX,baseY,r);const strength=intensity===0?.12:intensity===1?.38:.62;g.addColorStop(0,intensity===2?`rgba(255,72,62,${strength})`:`rgba(39,170,255,${strength})`);g.addColorStop(.42,intensity===2?'rgba(255,190,40,.34)':'rgba(45,222,195,.28)');g.addColorStop(1,'rgba(30,90,150,0)');ctx.fillStyle=g;ctx.beginPath();ctx.arc(baseX,baseY,r,0,Math.PI*2);ctx.fill();
  }
  if(trackPts&&trackPts.length){ctx.beginPath();trackPts.forEach((p,i)=>{const q=toCanvas(p,w,h);i?ctx.lineTo(q[0],q[1]):ctx.moveTo(q[0],q[1])});ctx.closePath();ctx.strokeStyle='rgba(235,244,250,.82)';ctx.lineWidth=4;ctx.shadowColor='#fff';ctx.shadowBlur=7;ctx.stroke();ctx.shadowBlur=0;for(let s=0;s<3;s++){const q=toCanvas(pointAt(s/3),w,h);ctx.fillStyle=['#ffb000','#50a7ff','#3fb950'][s];ctx.beginPath();ctx.arc(q[0],q[1],6,0,7);ctx.fill();ctx.fillStyle='#fff';ctx.font='bold 9px sans-serif';ctx.fillText('S'+(s+1),q[0]+8,q[1]-7)}}
  ctx.fillStyle='rgba(4,9,13,.78)';ctx.fillRect(12,h-49,w-24,37);ctx.fillStyle='#e7eef4';ctx.font='bold 12px sans-serif';ctx.fillText((radarOffset?fmt(t('radar.future'),radarOffset):t('radar.now'))+' · '+(intensity===0?(LANG==='it'?'asciutto':'dry'):intensity===1?(LANG==='it'?'pioggia':'rain'):(LANG==='it'?'pioggia forte':'heavy rain')),22,h-28);ctx.fillStyle='#9bc9ff';ctx.textAlign='right';ctx.fillText(fmt(t('radar.confidence'),conf),w-22,h-28);ctx.textAlign='left';
  const ce=document.getElementById('radar-confidence');if(ce)ce.textContent=fmt(t('radar.confidence'),conf);
}
function nearestCarAhead(){const act=S.cars.filter(x=>!x.out).sort((a,b)=>a.time-b.time),me=S.cars.find(x=>x.me),i=act.indexOf(me);return i>0?{car:act[i-1],gap:Math.max(.1,me.time-act[i-1].time)}:null}
function visualSpeed(){const me=S.cars.find(x=>x.me),wx=S.wx[Math.min(S.lap,S.wx.length-1)]||0;if(S.sc>0)return 105;if(S.vsc>0)return 165;let v=wx===2?215:wx===1?255:305;if(me.pace==='push')v+=18;if(me.pace==='save')v-=22;if(me.energyMode==='deploy')v+=8;return Math.round(v)}
function trackCurvature(me){
  if(!trackPts||!trackPts.length)return 0;
  const a=tangentAngleAt(me.vp+.008),b=tangentAngleAt(me.vp+.070);
  return Math.max(-1,Math.min(1,wrapAngle(b-a)*2.4));
}
function clamp01(v){return Math.max(0,Math.min(1,v))}
function lerp(a,b,t){return a+(b-a)*t}
function wrapAngle(a){while(a>Math.PI)a-=Math.PI*2;while(a<-Math.PI)a+=Math.PI*2;return a}
function tangentAngleAt(v){const a=pointAt(v-.0025),b=pointAt(v+.0025);return Math.atan2(b[1]-a[1],b[0]-a[0])}
function circuitVisualEnv(){
  const ci=S?.ci??0;
  return {
    night:[3,4,17,21,22,23].includes(ci),
    desert:[3,4,22,23].includes(ci),
    street:[4,5,7,16,17,21].includes(ci),
    forest:[2,9,11,13,14].includes(ci),
    urban:[0,1,5,6,7,16,17,18,19,21,23].includes(ci),
    floodlit:[3,4,17,21,22,23].includes(ci)
  };
}
function roadLookAngle(vp,look){return wrapAngle(tangentAngleAt(vp+look)-tangentAngleAt(vp))}
function roadElevation(vp,look){
  const seed=(S?.ci||0)*.91+1.7;
  return Math.sin((vp+look)*Math.PI*4+seed)*.55+Math.sin((vp+look)*Math.PI*7.2+seed*.4)*.25;
}
function buildRoadGeometry(w,h,horizon,me){
  const n=58,pts=[];
  for(let i=0;i<=n;i++){
    const t=i/n,far=1-t,look=.235*Math.pow(far,1.22)+.004;
    const a=roadLookAngle(me.vp,look),a2=roadLookAngle(me.vp,look+.025);
    const bend=(Math.sin(a)*.86+Math.sin(a2)*.20)*w*.58*Math.pow(far,1.34);
    const elev=(roadElevation(me.vp,look)-roadElevation(me.vp,.004))*23*Math.pow(far,1.18);
    const y=horizon+Math.pow(t,1.57)*(h-horizon)+elev;
    const half=8+Math.pow(t,1.46)*w*.615;
    pts.push({t,look,x:w/2+bend,y,half,curve:a});
  }
  return pts;
}
function skyPalette(wx,env){
  if(env.night)return wx===2?['#02050a','#0b1520','#263444']:wx===1?['#03070c','#10202c','#334958']:['#02050b','#0b1830','#2b4260'];
  if(env.desert)return wx?['#596a75','#8798a1','#bec8ca']:['#447fae','#85b9d7','#e9d5ab'];
  return wx===2?['#26323b','#5f707a','#a9b3b8']:wx===1?['#526c7b','#89a2ad','#d6dfe1']:['#2e7eb8','#78b7dd','#e6f2f8'];
}
function drawSkyWorld(ctx,w,h,horizon,wx,env,now){
  const pal=skyPalette(wx,env),g=ctx.createLinearGradient(0,0,0,horizon+70);g.addColorStop(0,pal[0]);g.addColorStop(.62,pal[1]);g.addColorStop(1,pal[2]);ctx.fillStyle=g;ctx.fillRect(0,0,w,horizon+80);
  if(!env.night){
    const sx=w*(.72+.04*Math.sin((S.ci||0)*1.7)),sy=horizon*.23;
    const sun=ctx.createRadialGradient(sx,sy,2,sx,sy,120);sun.addColorStop(0,wx?'rgba(255,255,255,.18)':'rgba(255,247,211,.95)');sun.addColorStop(.18,wx?'rgba(255,255,255,.08)':'rgba(255,230,165,.28)');sun.addColorStop(1,'rgba(255,255,255,0)');ctx.fillStyle=sun;ctx.fillRect(sx-130,sy-130,260,260);
  }else{
    ctx.fillStyle='rgba(220,235,255,.75)';for(let i=0;i<34;i++){const x=seeded01(600+i)*w,y=seeded01(700+i)*horizon*.75,r=.6+seeded01(800+i)*1.2;ctx.beginPath();ctx.arc(x,y,r,0,7);ctx.fill()}
  }
  const cloudAlpha=wx===2?.48:wx===1?.30:.14;
  ctx.fillStyle=env.night?`rgba(38,50,62,${cloudAlpha})`:`rgba(244,248,250,${cloudAlpha})`;
  for(let i=0;i<(wx?11:7);i++){
    const drift=(now*(4+i%3))%(w+220),x=(seeded01(i+810)*w+drift)-110,y=20+seeded01(i+830)*horizon*.55,r=18+seeded01(i+850)*42;
    ctx.beginPath();ctx.ellipse(x,y,r*2.1,r,.02,0,7);ctx.ellipse(x+r*.9,y+3,r*1.35,r*.76,0,0,7);ctx.ellipse(x-r*.9,y+5,r*1.1,r*.68,0,0,7);ctx.fill();
  }
  if(env.night){
    const glow=ctx.createLinearGradient(0,horizon-55,0,horizon+25);glow.addColorStop(0,'rgba(255,178,80,0)');glow.addColorStop(1,'rgba(255,178,80,.12)');ctx.fillStyle=glow;ctx.fillRect(0,horizon-60,w,90);
  }
}
function drawHorizonScenery(ctx,w,h,horizon,env,curve){
  ctx.save();
  if(env.urban||env.street){
    for(let i=0;i<18;i++){
      const bw=28+seeded01(900+i)*58,bh=22+seeded01(940+i)*92,x=i*w/17-bw*.5+curve*22;
      ctx.fillStyle=env.night?'#0a1017':'#586b76';ctx.fillRect(x,horizon-bh,bw,bh);
      ctx.fillStyle=env.night?'rgba(255,206,92,.70)':'rgba(210,231,242,.28)';
      for(let yy=horizon-bh+8;yy<horizon-4;yy+=11)for(let xx=x+7;xx<x+bw-4;xx+=12)if(seeded01((i+1)*1000+xx+yy)>.42)ctx.fillRect(xx,yy,4,3);
    }
  }else if(env.forest){
    for(let i=0;i<40;i++){
      const x=i*w/39+curve*18,hh=18+seeded01(980+i)*55;ctx.fillStyle=env.night?'#07130f':'#1d4a2b';ctx.beginPath();ctx.moveTo(x,horizon-hh);ctx.lineTo(x-hh*.24,horizon+5);ctx.lineTo(x+hh*.24,horizon+5);ctx.closePath();ctx.fill();
    }
  }else{
    ctx.fillStyle=env.desert?'#91795a':'#315c36';ctx.beginPath();ctx.moveTo(0,horizon+4);for(let i=0;i<=12;i++)ctx.lineTo(i*w/12,horizon-10-seeded01(1020+i)*22);ctx.lineTo(w,horizon+20);ctx.lineTo(0,horizon+20);ctx.fill();
  }
  ctx.restore();
}
function drawRoadWorld(ctx,w,h,horizon,me,wx,env){
  const pts=buildRoadGeometry(w,h,horizon,me),n=pts.length-1;
  ctx.fillStyle=env.desert?(wx?'#665f54':'#9b8663'):(wx?'#263d32':'#315b31');ctx.fillRect(0,horizon-2,w,h-horizon+2);
  // run-off aprons first
  for(let i=0;i<n;i++){
    const a=pts[i],b=pts[i+1],apA=Math.max(3,a.half*.12),apB=Math.max(3,b.half*.12);
    ctx.fillStyle=(i%2)?(env.street?'#59626a':'#4a5154'):(env.street?'#4d555c':'#3f474a');
    ctx.beginPath();ctx.moveTo(a.x-a.half-apA,a.y);ctx.lineTo(a.x+a.half+apA,a.y);ctx.lineTo(b.x+b.half+apB,b.y);ctx.lineTo(b.x-b.half-apB,b.y);ctx.closePath();ctx.fill();
  }
  for(let i=0;i<n;i++){
    const a=pts[i],b=pts[i+1],shade=i%2?1:0;
    const gg=ctx.createLinearGradient(0,a.y,0,b.y);gg.addColorStop(0,wx?(shade?'#343c42':'#30383e'):(shade?'#30363a':'#2b3135'));gg.addColorStop(1,wx?(shade?'#222a30':'#20272c'):(shade?'#1d2327':'#1a2024'));
    ctx.fillStyle=gg;ctx.beginPath();ctx.moveTo(a.x-a.half,a.y);ctx.lineTo(a.x+a.half,a.y);ctx.lineTo(b.x+b.half,b.y);ctx.lineTo(b.x-b.half,b.y);ctx.closePath();ctx.fill();
    if(i>5){
      const local=Math.abs(a.curve),showCurb=local>.035||i>n*.68;
      if(showCurb){
        const c=(Math.floor(i/2)%2)?'#f5f5f5':'#d7131d',wa=Math.max(2,a.half*.055),wb=Math.max(3,b.half*.055);
        ctx.fillStyle=c;ctx.beginPath();ctx.moveTo(a.x-a.half,a.y);ctx.lineTo(a.x-a.half-wa,a.y);ctx.lineTo(b.x-b.half-wb,b.y);ctx.lineTo(b.x-b.half,b.y);ctx.closePath();ctx.fill();
        ctx.beginPath();ctx.moveTo(a.x+a.half,a.y);ctx.lineTo(a.x+a.half+wa,a.y);ctx.lineTo(b.x+b.half+wb,b.y);ctx.lineTo(b.x+b.half,b.y);ctx.closePath();ctx.fill();
      }
    }
  }
  // rubbered racing line
  ctx.save();ctx.lineCap='round';ctx.strokeStyle=wx?'rgba(5,12,17,.35)':'rgba(4,7,10,.50)';ctx.lineWidth=14;ctx.beginPath();pts.forEach((p,i)=>{const offset=-Math.sin(p.curve)*p.half*.18;i?ctx.lineTo(p.x+offset,p.y):ctx.moveTo(p.x+offset,p.y)});ctx.stroke();
  ctx.strokeStyle=wx?'rgba(190,220,235,.16)':'rgba(170,190,200,.07)';ctx.lineWidth=3;ctx.beginPath();pts.forEach((p,i)=>i?ctx.lineTo(p.x,p.y):ctx.moveTo(p.x,p.y));ctx.stroke();ctx.restore();
  // edge lines
  ctx.strokeStyle='rgba(245,247,248,.88)';ctx.lineWidth=1.4;ctx.beginPath();pts.forEach((p,i)=>i?ctx.lineTo(p.x-p.half,p.y):ctx.moveTo(p.x-p.half,p.y));ctx.stroke();ctx.beginPath();pts.forEach((p,i)=>i?ctx.lineTo(p.x+p.half,p.y):ctx.moveTo(p.x+p.half,p.y));ctx.stroke();
  // wet speculars
  if(wx){
    ctx.save();ctx.globalCompositeOperation='screen';for(let i=11;i<n;i+=4){const p=pts[i],q=pts[Math.min(n,i+3)],alpha=(i/n)*.11;ctx.fillStyle=`rgba(185,220,240,${alpha})`;ctx.beginPath();ctx.moveTo(p.x-p.half*.18,p.y);ctx.lineTo(p.x+p.half*.16,p.y);ctx.lineTo(q.x+q.half*.10,q.y);ctx.lineTo(q.x-q.half*.12,q.y);ctx.closePath();ctx.fill()}ctx.restore();
  }
  drawTrackFurniture(ctx,w,h,pts,env,wx);
  return pts;
}
function drawTrackFurniture(ctx,w,h,pts,env,wx){
  const n=pts.length-1,labels=['MURETTO','ACADEMY','ENERGY','STRATEGY'];
  for(let i=7;i<n;i+=6){
    const p=pts[i],t=p.t,postH=3+Math.pow(t,1.9)*70,off=Math.max(8,p.half*.15);
    for(const side of [-1,1]){
      const x=p.x+side*(p.half+off),base=p.y;ctx.strokeStyle=env.street?'#aab3b9':'#d2d6d8';ctx.lineWidth=Math.max(.7,t*2.5);ctx.beginPath();ctx.moveTo(x,base);ctx.lineTo(x,base-postH);ctx.stroke();
      if(i%12===7){const bw=16+Math.pow(t,1.4)*65,bh=5+Math.pow(t,1.4)*18;ctx.save();ctx.translate(x,base-postH*.72);ctx.scale(side,1);fillRound(ctx,0,-bh,bw,bh,2,'#111820','#d0d8dc');ctx.fillStyle='#ffb000';ctx.font=`900 ${Math.max(4,bh*.48)}px system-ui`;ctx.textAlign='center';ctx.fillText(labels[(i/6)%labels.length|0],bw/2,-bh*.3);ctx.restore();ctx.textAlign='left'}
    }
  }
  if(env.floodlit){
    for(let i=10;i<n;i+=13){const p=pts[i],t=p.t,hh=8+Math.pow(t,1.8)*95;for(const side of [-1,1]){const x=p.x+side*(p.half+20+80*t);ctx.strokeStyle='#7d8790';ctx.lineWidth=Math.max(1,t*3);ctx.beginPath();ctx.moveTo(x,p.y);ctx.lineTo(x,p.y-hh);ctx.stroke();const glow=ctx.createRadialGradient(x,p.y-hh,1,x,p.y-hh,28+30*t);glow.addColorStop(0,'rgba(255,244,205,.95)');glow.addColorStop(1,'rgba(255,244,205,0)');ctx.fillStyle=glow;ctx.fillRect(x-60,p.y-hh-60,120,120)}}
  }
  // distance boards
  [18,25,32].forEach((idx,j)=>{const p=pts[Math.min(idx,n)],x=p.x+p.half+Math.max(12,p.half*.18),sz=7+p.t*22;ctx.fillStyle='#f2f4f5';ctx.fillRect(x-sz*.5,p.y-sz,sz,sz);ctx.fillStyle='#161b20';ctx.font=`900 ${Math.max(5,sz*.45)}px system-ui`;ctx.textAlign='center';ctx.fillText([150,100,50][j],x,p.y-sz*.3)});ctx.textAlign='left';
}
function roadPointForGap(pts,gap){const closeness=1-clamp01((gap-.12)/5.1),t=.11+Math.pow(closeness,.72)*.43;return pts[Math.max(0,Math.min(pts.length-1,Math.round(t*(pts.length-1))))]}
function drawOpponentCar(ctx,pts,ahead,wx){
  if(!ahead||ahead.gap>5.3)return;
  const p=roadPointForGap(pts,ahead.gap),scale=.22+p.t*1.15,cx=p.x-Math.sin(p.curve)*p.half*.09,cy=p.y-2;
  ctx.save();ctx.translate(cx,cy);ctx.scale(scale,scale);
  ctx.fillStyle='rgba(0,0,0,.40)';ctx.beginPath();ctx.ellipse(0,25,67,16,0,0,7);ctx.fill();
  // tyres
  const tyre=ctx.createLinearGradient(0,-5,0,38);tyre.addColorStop(0,'#31383d');tyre.addColorStop(.5,'#050607');tyre.addColorStop(1,'#1c2226');ctx.fillStyle=tyre;fillRound(ctx,-62,-2,20,40,6,tyre);fillRound(ctx,42,-2,20,40,6,tyre);
  // rear wing
  const tc=TEAMCOL[ahead.car.team]||'#c2c8cc';ctx.fillStyle='#090c0f';fillRound(ctx,-65,-22,130,12,3,'#0a0d10');ctx.fillStyle=tc;ctx.fillRect(-57,-19,114,5);ctx.fillStyle='#151a1f';ctx.fillRect(-53,-9,106,9);
  // body and diffuser
  ctx.fillStyle='#07090b';ctx.beginPath();ctx.moveTo(-46,34);ctx.lineTo(-31,11);ctx.lineTo(31,11);ctx.lineTo(46,34);ctx.closePath();ctx.fill();
  const body=ctx.createLinearGradient(-30,-20,30,28);body.addColorStop(0,tc);body.addColorStop(.55,tc);body.addColorStop(1,'#1a2025');ctx.fillStyle=body;ctx.beginPath();ctx.moveTo(-35,12);ctx.quadraticCurveTo(-27,-15,-12,-25);ctx.lineTo(12,-25);ctx.quadraticCurveTo(27,-15,35,12);ctx.lineTo(28,29);ctx.lineTo(-28,29);ctx.closePath();ctx.fill();
  ctx.fillStyle='#0a0d10';ctx.beginPath();ctx.ellipse(0,-19,13,9,0,0,7);ctx.fill();ctx.fillStyle='#d8dde0';ctx.beginPath();ctx.arc(0,-22,7,0,7);ctx.fill();
  ctx.fillStyle='#ef2b2d';ctx.shadowColor='#ff2528';ctx.shadowBlur=13;ctx.fillRect(-5,20,10,7);ctx.shadowBlur=0;
  ctx.fillStyle='rgba(255,255,255,.48)';ctx.fillRect(-22,-5,44,2);ctx.restore();
  if(wx){const g=ctx.createLinearGradient(cx,cy+8,cx,cy+170*scale);g.addColorStop(0,wx===2?'rgba(228,241,248,.62)':'rgba(228,241,248,.34)');g.addColorStop(1,'rgba(228,241,248,0)');ctx.fillStyle=g;ctx.beginPath();ctx.moveTo(cx-50*scale,cy+10*scale);ctx.lineTo(cx+50*scale,cy+10*scale);ctx.lineTo(cx+135*scale,cy+175*scale);ctx.lineTo(cx-135*scale,cy+175*scale);ctx.closePath();ctx.fill()}
}
function drawCarbonTexture(ctx,pathBounds,alpha){
  ctx.save();ctx.globalAlpha=alpha||.14;ctx.strokeStyle='#9fb0ba';ctx.lineWidth=.7;const [x,y,w,h]=pathBounds;for(let k=-h;k<w+h;k+=9){ctx.beginPath();ctx.moveTo(x+k,y);ctx.lineTo(x+k+h,y+h);ctx.stroke();ctx.beginPath();ctx.moveTo(x+k+4,y);ctx.lineTo(x+k-h+4,y+h);ctx.stroke()}ctx.restore();
}
function drawFrontWheel(ctx,x,y,scale,steer){
  ctx.save();ctx.translate(x,y);ctx.rotate(steer);ctx.scale(scale,scale);const g=ctx.createLinearGradient(-18,0,18,0);g.addColorStop(0,'#020304');g.addColorStop(.35,'#252b30');g.addColorStop(.66,'#050607');g.addColorStop(1,'#2b3135');fillRound(ctx,-25,-55,50,110,14,g,'#39434b');ctx.strokeStyle='rgba(255,255,255,.13)';ctx.lineWidth=1;for(let i=-45;i<50;i+=10){ctx.beginPath();ctx.moveTo(-21,i);ctx.lineTo(21,i+4);ctx.stroke()}ctx.restore();
}
function drawCockpitFrame(ctx,w,h,me,speed,gear,steer,now){
  // front suspension and tyres
  drawFrontWheel(ctx,w*.11,h*.80,1.22,-steer*.28);drawFrontWheel(ctx,w*.89,h*.80,1.22,-steer*.28);
  ctx.strokeStyle='#151a1f';ctx.lineWidth=13;ctx.lineCap='round';ctx.beginPath();ctx.moveTo(w*.18,h*.80);ctx.lineTo(w*.42,h*.67);ctx.stroke();ctx.beginPath();ctx.moveTo(w*.82,h*.80);ctx.lineTo(w*.58,h*.67);ctx.stroke();ctx.lineWidth=7;ctx.beginPath();ctx.moveTo(w*.18,h*.76);ctx.lineTo(w*.44,h*.73);ctx.stroke();ctx.beginPath();ctx.moveTo(w*.82,h*.76);ctx.lineTo(w*.56,h*.73);ctx.stroke();
  // nose
  const nose=ctx.createLinearGradient(w/2,h*.57,w/2,h);nose.addColorStop(0,'#29343c');nose.addColorStop(.45,'#0d1216');nose.addColorStop(1,'#030506');ctx.fillStyle=nose;ctx.beginPath();ctx.moveTo(w*.47,h*.54);ctx.lineTo(w*.53,h*.54);ctx.lineTo(w*.61,h);ctx.lineTo(w*.39,h);ctx.closePath();ctx.fill();drawCarbonTexture(ctx,[w*.39,h*.55,w*.22,h*.45],.08);
  // cockpit tub
  const tub=ctx.createLinearGradient(0,h*.61,0,h);tub.addColorStop(0,'#33414b');tub.addColorStop(.30,'#11171c');tub.addColorStop(1,'#020405');ctx.fillStyle=tub;ctx.beginPath();ctx.moveTo(0,h);ctx.lineTo(w*.22,h*.75);ctx.quadraticCurveTo(w*.35,h*.60,w*.46,h*.64);ctx.lineTo(w*.54,h*.64);ctx.quadraticCurveTo(w*.65,h*.60,w*.78,h*.75);ctx.lineTo(w,h);ctx.closePath();ctx.fill();drawCarbonTexture(ctx,[0,h*.63,w,h*.37],.07);
  // mirrors
  for(const side of [-1,1]){const mx=w/2+side*w*.34,my=h*.65;ctx.strokeStyle='#151a1f';ctx.lineWidth=8;ctx.beginPath();ctx.moveTo(w/2+side*w*.24,h*.70);ctx.lineTo(mx,my+6);ctx.stroke();const mg=ctx.createLinearGradient(mx-55,my,mx+55,my+30);mg.addColorStop(0,'#05080a');mg.addColorStop(.5,'#253746');mg.addColorStop(1,'#090d10');fillRound(ctx,mx-60,my-23,120,47,13,mg,'#667580');ctx.fillStyle='rgba(160,205,235,.18)';ctx.fillRect(mx-48,my-13,96,24)}
  // halo side arms and central pillar
  ctx.strokeStyle='#070a0d';ctx.lineCap='round';ctx.lineJoin='round';ctx.lineWidth=28;ctx.beginPath();ctx.moveTo(w*.26,h);ctx.quadraticCurveTo(w*.34,h*.57,w*.48,h*.50);ctx.stroke();ctx.beginPath();ctx.moveTo(w*.74,h);ctx.quadraticCurveTo(w*.66,h*.57,w*.52,h*.50);ctx.stroke();ctx.lineWidth=20;ctx.beginPath();ctx.moveTo(w/2,h*.56);ctx.lineTo(w/2,h*.09);ctx.stroke();ctx.strokeStyle='rgba(150,165,176,.22)';ctx.lineWidth=2;ctx.beginPath();ctx.moveTo(w/2+7,h*.55);ctx.lineTo(w/2+7,h*.10);ctx.stroke();
  // steering wheel and hands, small in pod-camera perspective
  ctx.save();ctx.translate(w/2,h*.84);ctx.rotate(-steer*.42);const ww=145,hh=88;ctx.fillStyle='#080b0e';ctx.strokeStyle='#66737d';ctx.lineWidth=4;ctx.beginPath();ctx.moveTo(-ww*.39,hh*.28);ctx.lineTo(-ww*.50,-hh*.12);ctx.quadraticCurveTo(-ww*.37,-hh*.48,-ww*.12,-hh*.37);ctx.lineTo(ww*.12,-hh*.37);ctx.quadraticCurveTo(ww*.37,-hh*.48,ww*.50,-hh*.12);ctx.lineTo(ww*.39,hh*.28);ctx.quadraticCurveTo(ww*.18,hh*.48,0,hh*.39);ctx.quadraticCurveTo(-ww*.18,hh*.48,-ww*.39,hh*.28);ctx.fill();ctx.stroke();fillRound(ctx,-37,-27,74,48,5,'#020405','#5a6872');ctx.fillStyle='#f3f6f7';ctx.font='950 31px system-ui';ctx.textAlign='center';ctx.fillText(gear,0,8);ctx.fillStyle='#67bfff';ctx.font='800 10px system-ui';ctx.fillText(speed+' KM/H',0,20);
  // gloves
  const glove='#e9edf0';for(const side of [-1,1]){ctx.fillStyle=glove;ctx.beginPath();ctx.ellipse(side*66,5,23,17,-side*.18,0,7);ctx.fill();ctx.strokeStyle='#aeb8bf';ctx.lineWidth=2;ctx.stroke();ctx.fillStyle='#ffb000';ctx.fillRect(side*66-9,-1,18,4)}ctx.restore();ctx.textAlign='left';
}
function drawMinimalHUD(ctx,w,h,me,speed,gear,ahead){
  const gap=ahead?ahead.gap:null;ctx.save();
  fillRound(ctx,18,17,188,70,7,'rgba(3,7,10,.72)','rgba(210,225,235,.22)');ctx.fillStyle='#8ea0ad';ctx.font='800 9px system-ui';ctx.fillText(LANG==='it'?'ONBOARD':'ONBOARD',30,35);ctx.fillStyle='#f6f8f9';ctx.font='950 31px system-ui';ctx.fillText(speed,28,66);ctx.fillStyle='#83c8f4';ctx.font='850 11px system-ui';ctx.fillText('KM/H',105,66);ctx.fillStyle='#ffb000';ctx.font='950 26px system-ui';ctx.fillText('G'+gear,154,66);
  fillRound(ctx,w-204,17,186,70,7,'rgba(3,7,10,.72)','rgba(210,225,235,.22)');ctx.fillStyle='#8ea0ad';ctx.font='800 9px system-ui';ctx.fillText('SOC',w-190,35);ctx.fillStyle='#f6f8f9';ctx.font='950 24px system-ui';ctx.fillText(Math.round(me.battery)+'%',w-190,64);ctx.fillStyle=me.otActive?'#57db70':'#84919a';ctx.font='850 10px system-ui';ctx.textAlign='right';ctx.fillText(me.otActive?'OVERTAKE READY':energyModeLabel(me.energyMode).toUpperCase(),w-30,64);ctx.textAlign='left';
  if(gap!==null){fillRound(ctx,w/2-65,17,130,43,7,'rgba(3,7,10,.66)','rgba(210,225,235,.18)');ctx.fillStyle='#8ea0ad';ctx.font='800 8px system-ui';ctx.textAlign='center';ctx.fillText(LANG==='it'?'GAP':'GAP',w/2,32);ctx.fillStyle=gap<=1?'#58db70':'#f6f8f9';ctx.font='950 16px system-ui';ctx.fillText('+'+gap.toFixed(2),w/2,51);ctx.textAlign='left'}
  ctx.restore();
}
function drawLensEffects(ctx,w,h,wx,now){
  if(!wx)return;
  ctx.save();ctx.globalCompositeOperation='screen';const count=wx===2?70:32;for(let i=0;i<count;i++){const phase=(seeded01(1200+i)+now*(.10+.03*(i%4)))%1,x=seeded01(1300+i)*w,y=phase*h,r=1+seeded01(1400+i)*(wx===2?4:2.6);ctx.fillStyle=`rgba(210,235,250,${.10+seeded01(1500+i)*.22})`;ctx.beginPath();ctx.ellipse(x,y,r*.55,r*1.7,-.25,0,7);ctx.fill()}ctx.restore();
  const mist=ctx.createLinearGradient(0,h*.16,0,h*.58);mist.addColorStop(0,'rgba(220,235,245,0)');mist.addColorStop(1,wx===2?'rgba(220,235,245,.16)':'rgba(220,235,245,.07)');ctx.fillStyle=mist;ctx.fillRect(0,0,w,h*.60);
}
function drawDriverView(){
  const [cv,ctx]=canvasCtx('drivecv');if(!cv||!ctx||!S)return;
  const w=cv.width,h=cv.height,wx=S.wx[Math.min(S.lap,S.wx.length-1)]||0,me=S.cars.find(x=>x.me),speed=visualSpeed(),gear=Math.max(1,Math.min(8,Math.round(speed/42))),now=performance.now()/1000,env=circuitVisualEnv(),steer=trackCurvature(me),shake=appSettings.reducedMotion?0:(Math.sin(now*19)*.8+Math.sin(now*31)*.35),horizon=h*.345+shake;
  ctx.clearRect(0,0,w,h);ctx.save();ctx.translate(appSettings.reducedMotion?0:Math.sin(now*23)*.45,shake*.25);
  drawSkyWorld(ctx,w,h,horizon,wx,env,now);drawHorizonScenery(ctx,w,h,horizon,env,steer);const road=drawRoadWorld(ctx,w,h,horizon,me,wx,env);const ahead=nearestCarAhead();drawOpponentCar(ctx,road,ahead,wx);drawCockpitFrame(ctx,w,h,me,speed,gear,steer,now);ctx.restore();drawMinimalHUD(ctx,w,h,me,speed,gear,ahead);drawLensEffects(ctx,w,h,wx,now);
  if(!appSettings.reducedMotion){ctx.strokeStyle='rgba(255,255,255,.075)';ctx.lineWidth=2;for(let i=0;i<18;i++){const side=i%2?-1:1,y=h*.48+seeded01(1600+i)*h*.47,x=w/2+side*(w*.30+seeded01(1650+i)*w*.27);ctx.beginPath();ctx.moveTo(x,y);ctx.lineTo(x+side*(28+speed*.08),y+10);ctx.stroke()}}
  ctx.fillStyle='rgba(5,9,12,.62)';ctx.font='800 8px system-ui';ctx.textAlign='right';ctx.fillText(LANG==='it'?'VISUALIZZAZIONE SIMULATA':'SIMULATED VIEW',w-14,h-12);ctx.textAlign='left';
}
function drawButton(ctx,x,y,r,color,label,active){ctx.fillStyle='#030506';ctx.beginPath();ctx.arc(x,y,r+4,0,7);ctx.fill();ctx.strokeStyle=active?'#fff':'#4f5a63';ctx.lineWidth=active?2.5:1.5;ctx.stroke();const g=ctx.createRadialGradient(x-r*.3,y-r*.4,1,x,y,r);g.addColorStop(0,active?'#fff':color);g.addColorStop(.35,color);g.addColorStop(1,'#12161a');ctx.fillStyle=g;ctx.shadowColor=active?color:'transparent';ctx.shadowBlur=active?12:0;ctx.beginPath();ctx.arc(x,y,r,0,7);ctx.fill();ctx.shadowBlur=0;ctx.fillStyle='#f4f7f8';ctx.font=`900 ${Math.max(6,r*.48)}px system-ui`;ctx.textAlign='center';ctx.textBaseline='middle';ctx.fillText(label,x,y+.5);ctx.textBaseline='alphabetic';ctx.textAlign='left'}
function drawRotary(ctx,x,y,r,color,label,angle){ctx.save();ctx.translate(x,y);ctx.fillStyle='#050709';ctx.beginPath();ctx.arc(0,0,r+5,0,7);ctx.fill();ctx.strokeStyle='#59656f';ctx.lineWidth=2;ctx.stroke();const g=ctx.createRadialGradient(-r*.3,-r*.35,2,0,0,r);g.addColorStop(0,'#fff');g.addColorStop(.16,color);g.addColorStop(1,'#171b1f');ctx.fillStyle=g;ctx.beginPath();for(let i=0;i<20;i++){const a=i*Math.PI/10,rr=i%2?r*.82:r;const px=Math.cos(a)*rr,py=Math.sin(a)*rr;i?ctx.lineTo(px,py):ctx.moveTo(px,py)}ctx.closePath();ctx.fill();ctx.rotate(angle||0);ctx.strokeStyle='#020304';ctx.lineWidth=4;ctx.beginPath();ctx.moveTo(0,0);ctx.lineTo(0,-r*.75);ctx.stroke();ctx.fillStyle='#cfd7dc';ctx.font='800 8px system-ui';ctx.textAlign='center';ctx.rotate(-(angle||0));ctx.fillText(label,0,r+15);ctx.restore();ctx.textAlign='left'}
function drawCarbonPanel(ctx,x,y,w,h,r){
  const g=ctx.createLinearGradient(x,y,x+w,y+h);g.addColorStop(0,'#27323a');g.addColorStop(.32,'#0e1419');g.addColorStop(.68,'#1b2329');g.addColorStop(1,'#05080a');fillRound(ctx,x,y,w,h,r,g,'#66737d');ctx.save();roundRectPath(ctx,x,y,w,h,r);ctx.clip();drawCarbonTexture(ctx,[x,y,w,h],.10);ctx.restore();
}
function drawWheelDisplay(ctx,x,y,w,h,me,speed,gear,delta,therm){
  fillRound(ctx,x,y,w,h,7,'#010304','#8c9aa4');const g=ctx.createLinearGradient(x,y,x,y+h);g.addColorStop(0,'#0a1b25');g.addColorStop(.45,'#020608');g.addColorStop(1,'#000203');fillRound(ctx,x+5,y+5,w-10,h-10,4,g,'rgba(88,190,240,.25)');
  const top=y+23;ctx.textAlign='center';ctx.fillStyle=me.otActive?'#5bea70':'#74818a';ctx.font='900 11px system-ui';ctx.fillText(me.otActive?'OVERTAKE':'OT —',x+w*.79,top);ctx.fillStyle='#ffc857';ctx.fillText('SOC '+Math.round(me.battery)+'%',x+w*.21,top);ctx.fillStyle=delta.startsWith('−')?'#54e071':'#ffcc5c';ctx.fillText('Δ '+delta,x+w*.50,top);
  ctx.fillStyle='#f5f8fa';ctx.font='950 86px system-ui';ctx.fillText(gear,x+w*.50,y+h*.61);ctx.fillStyle='#79c8ff';ctx.font='950 18px system-ui';ctx.fillText(speed+' KM/H',x+w*.50,y+h*.79);
  ctx.fillStyle='#9dabb4';ctx.font='850 10px system-ui';ctx.fillText('LAP '+Math.max(1,S.lap)+'/'+S.c.laps,x+w*.18,y+h-14);ctx.fillText(energyModeLabel(me.energyMode).toUpperCase(),x+w*.50,y+h-14);ctx.fillText('BB 57.2',x+w*.82,y+h-14);
  // SOC and tyre temp bars
  const by=y+h-7;ctx.fillStyle='#18232a';ctx.fillRect(x+12,by,w-24,3);ctx.fillStyle=me.battery<20?'#ff4f55':'#55d66a';ctx.fillRect(x+12,by,(w-24)*clamp01(me.battery/100),3);
  ctx.textAlign='left';
}
function drawGlovedHand(ctx,x,y,side,angle){
  ctx.save();ctx.translate(x,y);ctx.rotate(angle);ctx.scale(side,1);const g=ctx.createLinearGradient(-26,-20,28,25);g.addColorStop(0,'#fbfbfb');g.addColorStop(.55,'#cbd2d7');g.addColorStop(1,'#7e8a92');ctx.fillStyle=g;ctx.beginPath();ctx.ellipse(0,0,34,25,-.16,0,7);ctx.fill();ctx.strokeStyle='#5c6870';ctx.lineWidth=2;ctx.stroke();ctx.fillStyle='#ffb000';ctx.fillRect(-22,-6,38,6);ctx.fillStyle='#242b30';for(let i=0;i<4;i++)fillRound(ctx,7+i*5,-17+i*2,8,22,4,'#242b30');ctx.restore();
}
function drawWheelView(){
  const [cv,ctx]=canvasCtx('wheelcv');if(!cv||!ctx||!S)return;
  const w=cv.width,h=cv.height,me=S.cars.find(x=>x.me),speed=visualSpeed(),gear=Math.max(1,Math.min(8,Math.round(speed/42))),therm=tyreThermalState(me),delta=(me.pace==='push'?'−0.18':me.pace==='save'?'+0.42':'+0.03'),steer=trackCurvature(me),now=performance.now()/1000,shake=appSettings.reducedMotion?0:Math.sin(now*17)*.6;
  ctx.clearRect(0,0,w,h);const bg=ctx.createLinearGradient(0,0,0,h);bg.addColorStop(0,'#111a21');bg.addColorStop(.55,'#060a0d');bg.addColorStop(1,'#020304');ctx.fillStyle=bg;ctx.fillRect(0,0,w,h);
  // cockpit surround, knees and steering column
  ctx.fillStyle='#11181e';ctx.beginPath();ctx.moveTo(0,h);ctx.lineTo(0,h*.22);ctx.quadraticCurveTo(w*.18,h*.11,w*.30,h*.24);ctx.lineTo(w*.70,h*.24);ctx.quadraticCurveTo(w*.82,h*.11,w,h*.22);ctx.lineTo(w,h);ctx.closePath();ctx.fill();drawCarbonTexture(ctx,[0,h*.16,w,h*.84],.055);
  ctx.fillStyle='#242c31';ctx.beginPath();ctx.ellipse(w*.32,h*.88,86,155,-.24,0,7);ctx.fill();ctx.beginPath();ctx.ellipse(w*.68,h*.88,86,155,.24,0,7);ctx.fill();
  ctx.strokeStyle='#6a7782';ctx.lineWidth=12;ctx.lineCap='round';ctx.beginPath();ctx.moveTo(w*.42,h*.19);ctx.lineTo(w*.37,h*.71);ctx.stroke();ctx.beginPath();ctx.moveTo(w*.58,h*.19);ctx.lineTo(w*.63,h*.71);ctx.stroke();ctx.fillStyle='#171e24';ctx.beginPath();ctx.ellipse(w/2,h*.82,105,39,0,0,7);ctx.fill();
  ctx.save();ctx.translate(w/2,h*.51+shake);ctx.rotate(-steer*.14);const ww=w*.73,wh=h*.76;
  // paddle shifters behind
  ctx.fillStyle='#303a42';ctx.strokeStyle='#818d96';ctx.lineWidth=2;for(const side of [-1,1]){ctx.beginPath();ctx.moveTo(side*ww*.23,-wh*.36);ctx.lineTo(side*ww*.40,-wh*.24);ctx.lineTo(side*ww*.36,wh*.20);ctx.lineTo(side*ww*.24,wh*.16);ctx.closePath();ctx.fill();ctx.stroke()}
  // central wheel body
  drawCarbonPanel(ctx,-ww*.39,-wh*.40,ww*.78,wh*.78,42);
  // recessed thumb cut-outs: preserve the cockpit behind instead of erasing the canvas
  for(const side of [-1,1]){const cg=ctx.createRadialGradient(side*ww*.31,-wh*.03,4,side*ww*.31,-wh*.03,ww*.13);cg.addColorStop(0,'#020405');cg.addColorStop(1,'#11181d');ctx.fillStyle=cg;ctx.beginPath();ctx.ellipse(side*ww*.31,-wh*.02,ww*.115,wh*.215,0,0,7);ctx.fill();ctx.strokeStyle='rgba(140,155,165,.28)';ctx.lineWidth=2;ctx.stroke()}
  // grips
  for(const side of [-1,1]){const gx=side*ww*.40- (side<0?ww*.11:0);const grip=ctx.createLinearGradient(gx,0,gx+side*ww*.12,0);grip.addColorStop(0,'#020304');grip.addColorStop(.45,'#242b30');grip.addColorStop(1,'#050708');fillRound(ctx,gx,-wh*.25,ww*.12,wh*.53,22,grip,'#59646d');ctx.strokeStyle='rgba(255,255,255,.12)';ctx.lineWidth=1;for(let i=0;i<10;i++){const yy=-wh*.20+i*wh*.047;ctx.beginPath();ctx.moveTo(gx+6,yy);ctx.lineTo(gx+ww*.12-6,yy+side*3);ctx.stroke()}}
  // screen and LEDs
  const sx=-ww*.205,sy=-wh*.29,sw=ww*.41,sh=wh*.40;drawWheelDisplay(ctx,sx,sy,sw,sh,me,speed,gear,delta,therm);
  const ledN=17,ledStart=-ww*.20,ledGap=ww*.40/(ledN-1),rpm=clamp01((speed-75)/255);for(let i=0;i<ledN;i++){const lit=i<Math.round(rpm*ledN),col=i<10?'#34dd62':i<14?'#ffe34e':'#ff3d4e';ctx.fillStyle=lit?col:'#172027';ctx.shadowColor=lit?col:'transparent';ctx.shadowBlur=lit?10:0;ctx.beginPath();ctx.arc(ledStart+i*ledGap,sy-15,5.2,0,7);ctx.fill()}ctx.shadowBlur=0;
  // realistic button clusters
  drawButton(ctx,-ww*.30,-wh*.19,13,'#e61c28','N',false);drawButton(ctx,-ww*.30,-wh*.06,13,'#2087e6','RAD',false);drawButton(ctx,-ww*.30,wh*.09,13,'#f0c51d','BB+',false);drawButton(ctx,-ww*.19,wh*.19,11,'#2d8ee8','−',false);drawButton(ctx,-ww*.10,wh*.22,11,'#40c96b','+',false);
  drawButton(ctx,ww*.30,-wh*.19,13,'#35c76a','OK',false);drawButton(ctx,ww*.30,-wh*.06,13,'#9a55d8','OT',me.otActive);drawButton(ctx,ww*.30,wh*.09,13,'#ff7d2e','PIT',!!me.pitArmed);drawButton(ctx,ww*.19,wh*.19,11,'#2d8ee8','−',false);drawButton(ctx,ww*.10,wh*.22,11,'#40c96b','+',false);
  drawRotary(ctx,-ww*.25,wh*.30,18,'#d664ff','DIFF',steer*.35);drawRotary(ctx,0,wh*.29,21,'#ffb000','STRAT',(S.lap%8)*.38);drawRotary(ctx,ww*.25,wh*.30,18,'#47a8ff','ERS',me.energyMode==='deploy'?.8:me.energyMode==='recharge'?-1.0:0);
  // tiny labels and status lamps
  ctx.fillStyle='#aab5bc';ctx.font='800 8px system-ui';ctx.textAlign='center';ctx.fillText('DRINK',-ww*.18,-wh*.34);ctx.fillText('RADIO',ww*.18,-wh*.34);ctx.fillStyle=me.energyMode==='deploy'?'#58dc70':'#26343c';ctx.beginPath();ctx.arc(ww*.12,wh*.16,5,0,7);ctx.fill();ctx.fillStyle=me.energyMode==='recharge'?'#59baff':'#26343c';ctx.beginPath();ctx.arc(-ww*.12,wh*.16,5,0,7);ctx.fill();
  ctx.restore();
  // hands overlap grips
  drawGlovedHand(ctx,w*.22,h*.54,-1,-.18-steer*.10);drawGlovedHand(ctx,w*.78,h*.54,1,.18-steer*.10);
  // small integrated telemetry, not a fake external dashboard
  const ahead=nearestCarAhead();fillRound(ctx,18,h-56,w-36,38,7,'rgba(3,7,10,.68)','rgba(255,255,255,.10)');const entries=[['SURF',Math.round(me.tyreSurface)+'°'],['CORE',Math.round(me.tyreCore)+'°'],['WEAR',Math.round(me.wear)+'%'],['MODE',energyModeLabel(me.energyMode).toUpperCase()],['GAP',ahead?ahead.gap.toFixed(2)+'s':'—']];const ew=(w-50)/entries.length;entries.forEach((e,i)=>{ctx.fillStyle='#73818b';ctx.font='800 8px system-ui';ctx.fillText(e[0],28+i*ew,h-38);ctx.fillStyle=e[0]==='SURF'&&therm==='hot'?'#ff5d65':e[0]==='SURF'&&therm==='cold'?'#61b8ff':'#e8eef1';ctx.font='950 12px system-ui';ctx.fillText(e[1],28+i*ew,h-24)});
  ctx.fillStyle='rgba(255,255,255,.34)';ctx.font='800 8px system-ui';ctx.textAlign='right';ctx.fillText(LANG==='it'?'VOLANTE DIDATTICO ISPIRATO A MONOPOSTO':'FORMULA-STYLE TRAINING WHEEL',w-14,14);ctx.textAlign='left';
}

function renderThermalUI(me){const state=tyreThermalState(me),cfg=TYRE_THERMAL[me.tyre]||TYRE_THERMAL.M;const surf=document.getElementById('tyre-surface'),core=document.getElementById('tyre-core'),sb=document.getElementById('tyre-surface-bar'),cb=document.getElementById('tyre-core-bar'),st=document.getElementById('tyre-thermal-status'),ef=document.getElementById('tyre-thermal-effect');if(surf)surf.textContent=Math.round(me.tyreSurface)+'°C';if(core)core.textContent=Math.round(me.tyreCore)+'°C';if(sb)sb.style.width=Math.max(0,Math.min(100,(me.tyreSurface-40)/90*100))+'%';if(cb)cb.style.width=Math.max(0,Math.min(100,(me.tyreCore-40)/80*100))+'%';if(st){st.textContent=t('thermal.'+state);st.style.color=state==='ok'?'var(--ok)':state==='hot'?'var(--bad)':'var(--wet)'}if(ef)ef.textContent=t('thermal.'+state+'.effect')}
function calculatePitForecast(tyre){if(!S)return null;const me=S.cars.find(x=>x.me),mult=S.sc>0?.55:S.vsc>0?.7:1,loss=S.c.pit*mult+(me.dmg>0?3:0),projected=me.time+loss,others=S.cars.filter(x=>!x.out&&!x.me).sort((a,b)=>a.time-b.time),pos=1+others.filter(x=>x.time<projected).length,near=others.filter(x=>Math.abs(x.time-projected)<3.2).sort((a,b)=>Math.abs(a.time-projected)-Math.abs(b.time-projected)),order=S.cars.filter(x=>!x.out).sort((a,b)=>a.time-b.time),idx=order.indexOf(me),ahead=idx>0?order[idx-1]:null,gapAhead=ahead?me.time-ahead.time:null;let call=near.length?t('pitforecast.risk'):t('pitforecast.safe');if(ahead&&gapAhead<3.2&&me.wear>ahead.wear+10)call=t('pitforecast.undercut');else if(idx>=0&&idx<order.length-1&&order[idx+1].time-me.time<2.2)call=t('pitforecast.protect');return{loss,pos,lo:Math.max(1,pos-1),hi:Math.min(20,pos+1),near,call,tyre:tyre||me.pitArmed||pickDryCompound(me,S.c)}}
function renderPitForecast(tyre){const f=calculatePitForecast(tyre);if(!f)return;const a=document.getElementById('pitforecast-loss'),b=document.getElementById('pitforecast-pos'),c=document.getElementById('pitforecast-traffic'),d=document.getElementById('pitforecast-call'),e=document.getElementById('pitforecast-detail');if(a)a.textContent=fmt(t('pitforecast.loss'),f.loss.toFixed(1));if(b)b.textContent=f.lo===f.hi?'P'+f.pos:`P${f.lo}–P${f.hi}`;if(c)c.textContent=f.near.length?fmt(t('pitforecast.cars'),f.near.length):t('pitforecast.clear');if(d)d.textContent=f.call;if(e)e.textContent=f.near.length?fmt(t('pitforecast.detail.traffic'),f.near.slice(0,2).map(x=>x.name).join(', ')):t('pitforecast.detail.clear')}
function updateInfoSources(){if(!S)return;const me=S.cars.find(x=>x.me),wx=S.wx[Math.min(S.lap,S.wx.length-1)]||0,conf=Math.round(radarConfidenceFor(0)),rs=document.getElementById('source-radar'),ds=document.getElementById('source-driver'),ts=document.getElementById('source-track');if(rs)rs.textContent=fmt(t('source.radar'),conf);const thermal=tyreThermalState(me);if(ds)ds.textContent=wx?t('source.driver.wet'):thermal==='cold'?t('source.driver.front'):thermal==='hot'?t('source.driver.rear'):t('source.driver.stable');if(ts)ts.textContent=wx===2?t('source.track.wet'):wx===1?t('source.track.damp'):t('source.track.dry')}

let trackPts = null, trackRAF = null, lastFrame = 0;
function mulberry(a){ return function(){ a|=0; a=a+0x6D2B79F5|0; let q=Math.imul(a^a>>>15,1|a); q=q+Math.imul(q^q>>>7,61|q)^q; return ((q^q>>>14)>>>0)/4294967296; }; }
function cr_(a,b,c2,d,x){const x2=x*x,x3=x2*x;return .5*((2*b)+(-a+c2)*x+(2*a-5*b+4*c2-d)*x2+(-a+3*b-3*c2+d)*x3);}
const FALLBACK_TRACK_LAYOUTS = {
  0: [ // Melbourne — Albert Park
    [-.90,-.08],[-.78,-.40],[-.47,-.58],[-.12,-.53],[.12,-.34],[.38,-.50],[.72,-.42],[.89,-.14],[.74,.09],[.45,.18],[.64,.44],[.35,.64],[-.02,.50],[-.33,.66],[-.63,.47],[-.84,.20]
  ],
  1: [ // Shanghai
    [-.86,-.05],[-.80,-.34],[-.59,-.56],[-.27,-.62],[.01,-.48],[.15,-.20],[-.02,.02],[-.28,-.06],[-.16,.22],[.18,.16],[.52,.24],[.82,.49],[.58,.68],[.18,.58],[-.20,.67],[-.58,.46],[-.84,.20]
  ],
  2: [ // Suzuka — figura a otto
    [-.91,.10],[-.69,-.17],[-.45,-.48],[-.10,-.58],[.18,-.42],[.04,-.13],[-.31,.02],[-.05,.25],[.31,.16],[.64,-.05],[.88,.18],[.70,.50],[.34,.64],[-.01,.44],[-.35,.59],[-.68,.40]
  ],
  3: [ // Bahrain — Sakhir
    [-.90,-.25],[-.57,-.54],[-.10,-.61],[.33,-.49],[.82,-.20],[.64,.04],[.29,-.01],[.42,.22],[.75,.48],[.38,.65],[-.02,.51],[-.37,.66],[-.75,.40],[-.57,.12],[-.88,.01]
  ],
  4: [ // Jeddah
    [-.95,-.47],[-.71,-.58],[-.43,-.45],[-.12,-.61],[.17,-.48],[.48,-.62],[.86,-.40],[.72,-.13],[.89,.13],[.62,.38],[.30,.58],[-.05,.48],[-.37,.63],[-.68,.42],[-.89,.12]
  ],
  5: [ // Miami
    [-.88,-.30],[-.53,-.55],[-.13,-.56],[.29,-.48],[.75,-.24],[.88,.02],[.59,.16],[.32,.04],[.14,.28],[.46,.48],[.23,.67],[-.16,.55],[-.49,.66],[-.78,.39],[-.62,.10],[-.89,-.02]
  ],
  6: [ // Montréal — Gilles Villeneuve
    [-.93,-.39],[-.62,-.57],[-.25,-.53],[.14,-.60],[.56,-.49],[.88,-.22],[.69,.00],[.88,.23],[.54,.43],[.18,.57],[-.18,.51],[-.55,.61],[-.83,.38],[-.67,.10],[-.91,-.05]
  ],
  7: [ // Monaco
    [-.82,-.20],[-.52,-.46],[-.19,-.52],[.03,-.31],[-.15,-.09],[.15,.03],[.46,-.13],[.72,.07],[.54,.29],[.80,.47],[.43,.62],[.09,.42],[-.09,.64],[-.42,.48],[-.68,.21],[-.88,.07]
  ],
  8: [ // Barcelona-Catalunya
    [-.91,-.27],[-.57,-.56],[-.17,-.58],[.22,-.49],[.73,-.27],[.86,.02],[.57,.16],[.25,.05],[.02,.24],[.33,.42],[.14,.64],[-.25,.56],[-.58,.67],[-.82,.39],[-.66,.10],[-.91,-.01]
  ],
  9: [ // Spielberg — Red Bull Ring
    [-.89,-.23],[-.53,-.52],[-.10,-.58],[.37,-.48],[.80,-.19],[.65,.09],[.35,.23],[.57,.48],[.22,.65],[-.15,.49],[-.50,.63],[-.77,.36],[-.62,.08],[-.88,-.02]
  ],
  10: [ // Silverstone
    [-.89,-.09],[-.66,-.47],[-.31,-.62],[.01,-.45],[.34,-.64],[.76,-.37],[.58,-.08],[.86,.20],[.58,.50],[.19,.40],[.02,.66],[-.34,.54],[-.68,.34],[-.46,.08]
  ],
  11: [ // Spa-Francorchamps
    [-.96,.20],[-.77,-.18],[-.55,-.58],[-.17,-.66],[.22,-.52],[.62,-.64],[.94,-.34],[.73,-.04],[.42,.08],[.72,.34],[.42,.62],[-.02,.54],[-.38,.70],[-.70,.46],[-.88,.04]
  ],
  12: [ // Hungaroring
    [-.82,-.25],[-.54,-.52],[-.18,-.59],[.18,-.46],[.55,-.58],[.79,-.31],[.56,-.06],[.75,.18],[.49,.45],[.12,.35],[-.06,.62],[-.38,.50],[-.70,.30],[-.52,.04],[-.80,-.02]
  ],
  13: [ // Zandvoort
    [-.82,-.31],[-.49,-.55],[-.10,-.60],[.28,-.45],[.65,-.54],[.84,-.26],[.63,-.03],[.80,.25],[.49,.49],[.15,.38],[-.05,.64],[-.38,.51],[-.70,.31],[-.55,.05],[-.82,-.04]
  ],
  14: [ // Monza
    [-.94,-.35],[-.57,-.58],[-.15,-.57],[.31,-.52],[.86,-.34],[.67,-.08],[.31,-.02],[.49,.16],[.82,.40],[.44,.63],[-.03,.54],[-.44,.67],[-.79,.38],[-.58,.10],[-.93,-.02]
  ],
  15: [ // Madrid IFEMA — sagoma stilizzata provvisoria
    [-.89,-.34],[-.55,-.56],[-.18,-.50],[.14,-.62],[.48,-.47],[.84,-.26],[.65,.00],[.86,.23],[.57,.48],[.25,.38],[.02,.64],[-.31,.52],[-.66,.61],[-.82,.34],[-.61,.06],[-.89,-.04]
  ],
  16: [ // Baku
    [-.96,-.47],[-.62,-.58],[-.26,-.53],[.14,-.60],[.54,-.51],[.91,-.32],[.72,-.08],[.45,.01],[.64,.21],[.88,.44],[.51,.62],[.10,.49],[-.28,.65],[-.63,.44],[-.88,.15]
  ],
  17: [ // Singapore — Marina Bay
    [-.85,-.48],[-.50,-.62],[-.22,-.42],[.06,-.60],[.34,-.38],[.72,-.52],[.88,-.18],[.62,.02],[.88,.26],[.58,.54],[.22,.40],[-.04,.66],[-.30,.42],[-.64,.58],[-.88,.26],[-.64,.02]
  ],
  18: [ // Austin — COTA
    [-.91,-.30],[-.58,-.57],[-.18,-.60],[.18,-.46],[.58,-.58],[.84,-.27],[.62,-.04],[.83,.21],[.49,.47],[.13,.37],[-.08,.65],[-.43,.52],[-.75,.31],[-.58,.04],[-.87,-.05]
  ],
  19: [ // México — Hermanos Rodríguez
    [-.93,-.34],[-.57,-.57],[-.16,-.55],[.27,-.48],[.81,-.28],[.65,-.02],[.34,.09],[.55,.29],[.76,.52],[.38,.65],[-.04,.52],[-.43,.66],[-.78,.39],[-.59,.10],[-.91,-.03]
  ],
  20: [ // Interlagos
    [-.74,-.30],[-.38,-.56],[.04,-.56],[.42,-.38],[.72,-.08],[.48,.18],[.14,.08],[.28,.36],[.58,.56],[.16,.66],[-.18,.46],[-.52,.58],[-.78,.28],[-.54,.02],[-.82,-.08]
  ],
  21: [ // Las Vegas
    [-.96,-.43],[-.60,-.57],[-.18,-.52],[.24,-.59],[.71,-.43],[.92,-.18],[.70,.06],[.90,.30],[.57,.52],[.16,.43],[-.18,.61],[-.54,.48],[-.84,.22],[-.66,-.02],[-.94,-.10]
  ],
  22: [ // Lusail
    [-.88,-.29],[-.55,-.55],[-.15,-.60],[.23,-.48],[.61,-.56],[.84,-.28],[.63,-.03],[.82,.23],[.53,.49],[.18,.38],[-.04,.64],[-.39,.52],[-.72,.32],[-.55,.05],[-.84,-.04]
  ],
  23: [ // Abu Dhabi — Yas Marina
    [-.89,-.28],[-.49,-.54],[-.06,-.58],[.40,-.52],[.86,-.24],[.64,.02],[.24,-.02],[.42,.22],[.78,.46],[.38,.64],[-.02,.48],[-.38,.66],[-.72,.38],[-.52,.08],[-.88,.00]
  ]
};

/*
  Profili reali dei circuiti: archivio F1DB, licenza CC BY 4.0.
  Il gioco campiona il path SVG del layout esatto; le vecchie coordinate restano solo come fallback offline.
*/
/*
  Mappatura esplicita dei 24 layout utilizzati nel calendario 2026.
  Non viene più cercato "il numero più alto": ogni GP punta al file esatto,
  evitando versioni storiche, centinaia di richieste 404 e fallback casuali.
*/
const TRACK_FILE = {
  0:'melbourne-2',          // Australia — layout 2022+
  1:'shanghai-1',           // China
  2:'suzuka-2',             // Japan — layout attuale
  3:'bahrain-1',            // Bahrain — Grand Prix layout
  4:'jeddah-1',             // Saudi Arabia
  5:'miami-1',              // Miami
  6:'montreal-6',           // Canada — layout attuale
  7:'monaco-6',             // Monaco — layout attuale
  8:'catalunya-6',          // Barcelona — senza chicane finale
  9:'spielberg-3',          // Austria — Red Bull Ring attuale
  10:'silverstone-8',       // Great Britain — Arena layout
  11:'spa-francorchamps-4', // Belgium — layout 2007+
  12:'hungaroring-3',       // Hungary — layout attuale
  13:'zandvoort-5',         // Netherlands — banking/current layout
  14:'monza-7',             // Italy — layout attuale
  15:'madring-1',           // Spain (Madrid) — 2026 Madring
  16:'baku-1',              // Azerbaijan
  17:'marina-bay-4',        // Singapore — layout 2023+
  18:'austin-1',            // United States — COTA
  19:'mexico-city-3',       // Mexico — current GP layout
  20:'interlagos-2',        // São Paulo — current layout
  21:'las-vegas-1',         // Las Vegas
  22:'lusail-1',            // Qatar
  23:'yas-marina-2'         // Abu Dhabi — layout 2021+
};
const TRACK_PATH_CACHE = {};
const TRACK_SOURCE_CACHE = {};
const TRACK_LOAD_PROMISE = {};
const TRACK_BASE_URLS = [
  'https://cdn.jsdelivr.net/gh/f1db/f1db@main/src/assets/circuits/white-outline/',
  'https://raw.githubusercontent.com/f1db/f1db/main/src/assets/circuits/white-outline/'
];

async function fetchRealTrack(ci){
  if(TRACK_PATH_CACHE[ci]) return TRACK_PATH_CACHE[ci];
  if(TRACK_LOAD_PROMISE[ci]) return TRACK_LOAD_PROMISE[ci];
  const file=TRACK_FILE[ci];
  if(!file) return null;

  TRACK_LOAD_PROMISE[ci]=(async()=>{
    for(const base of TRACK_BASE_URLS){
      try{
        const res=await fetch(base+file+'.svg',{cache:'force-cache',mode:'cors'});
        if(!res.ok) continue;
        const txt=await res.text();
        const doc=new DOMParser().parseFromString(txt,'image/svg+xml');
        const paths=[...doc.querySelectorAll('path[d]')];
        if(!paths.length) continue;
        const path=paths.reduce((best,p)=>(p.getAttribute('d')||'').length>(best.getAttribute('d')||'').length?p:best,paths[0]);
        const d=path.getAttribute('d');
        if(d){
          TRACK_PATH_CACHE[ci]=d;
          TRACK_SOURCE_CACHE[ci]=file;
          return d;
        }
      }catch(_e){}
    }
    return null;
  })();

  try{ return await TRACK_LOAD_PROMISE[ci]; }
  finally{ delete TRACK_LOAD_PROMISE[ci]; }
}
function pointsFromSvgPath(d){
  const ns='http://www.w3.org/2000/svg';
  const svg=document.createElementNS(ns,'svg');
  svg.setAttribute('width','1');
  svg.setAttribute('height','1');
  svg.style.cssText='position:absolute;left:-9999px;top:-9999px;width:1px;height:1px;opacity:0;pointer-events:none;';
  const path=document.createElementNS(ns,'path');
  path.setAttribute('d',d);
  svg.appendChild(path);
  document.body.appendChild(svg);
  const pts=[];
  try{
    const len=path.getTotalLength();
    const N=620;
    if(!Number.isFinite(len) || len<=0) return null;
    for(let i=0;i<N;i++){
      const q=path.getPointAtLength(len*i/N);
      pts.push([q.x,q.y]);
    }
  }catch(_e){
    return null;
  }finally{
    svg.remove();
  }
  return pts.length?pts:null;
}

function pointsFromFallback(ci){
  const base=FALLBACK_TRACK_LAYOUTS[ci];
  if(!base||base.length<4) return [];
  const pts=[];
  const N=520;
  const n=base.length;
  for(let i=0;i<N;i++){
    const x=i/N*n;
    const k=Math.floor(x);
    const f=x-k;
    const p0=base[(k-1+n)%n];
    const p1=base[k%n];
    const p2=base[(k+1)%n];
    const p3=base[(k+2)%n];
    pts.push([
      cr_(p0[0],p1[0],p2[0],p3[0],f),
      cr_(p0[1],p1[1],p2[1],p3[1],f)
    ]);
  }
  return pts;
}

let trackBounds={minX:-1,maxX:1,minY:-1,maxY:1,cx:0,cy:0};
function setTrackPoints(pts){
  trackPts=(pts&&pts.length)?pts:pointsFromFallback(0);
  const xs=trackPts.map(p=>p[0]);
  const ys=trackPts.map(p=>p[1]);
  const minX=Math.min(...xs);
  const maxX=Math.max(...xs);
  const minY=Math.min(...ys);
  const maxY=Math.max(...ys);
  trackBounds={minX,maxX,minY,maxY,cx:(minX+maxX)/2,cy:(minY+maxY)/2};
}

async function buildTrack(ci){
  // Mostra subito un tracciato e non blocca l'apertura della schermata gara.
  setTrackPoints(pointsFromFallback(ci));
  try{
    const d=TRACK_PATH_CACHE[ci]||await fetchRealTrack(ci);
    const realPts=d?pointsFromSvgPath(d):null;
    if(realPts&&realPts.length && S && S.ci===ci){
      setTrackPoints(realPts);
      renderLiveVisual();
    }
    return !!(realPts&&realPts.length);
  }catch(_e){
    return false;
  }
}

function toCanvas(p,w,h){
  const bx=trackBounds,rx=Math.max(1e-6,bx.maxX-bx.minX),ry=Math.max(1e-6,bx.maxY-bx.minY);
  const padX=Math.max(34,w*.055),padY=Math.max(25,h*.075);
  const scale=Math.min((w-2*padX)/rx,(h-2*padY)/ry);
  return [w/2+(p[0]-bx.cx)*scale,h/2+(p[1]-bx.cy)*scale];
}
function pointAt(x){ if(!trackPts||!trackPts.length) return [0,0]; x=((x%1)+1)%1; return trackPts[Math.floor(x*trackPts.length)%trackPts.length]; }
function startTrackAnim(){
  cancelAnimationFrame(trackRAF);
  lastFrame = performance.now();
  const step = (now)=>{
    if(!S){ trackRAF=null; return; }
    const dt = Math.min(0.1, (now-lastFrame)/1000); lastFrame = now;

    // Le vetture compiono un giro visivo nello stesso tempo usato dalla simulazione.
    // Prima il canvas correva sempre a circa 1,6 secondi per giro, qualunque
    // velocità fosse selezionata: per questo i quattro pulsanti sembravano uguali.
    if(S.started && autoTimer && !S.red && !S.ended){
      S.visualProgress += dt * (1000 / getLapDelay());
    }

    const active = S.cars.filter(cr=>!cr.out);
    const lead = active.length ? active.slice().sort((a,b)=>a.time-b.time)[0] : null;
    S.cars.forEach(cr=>{
      if(cr.out) return;
      const gapLaps = lead ? Math.max(0, (cr.time - lead.time) / 92) : 0;
      cr.vp = S.visualProgress - gapLaps;
    });

    renderLiveVisual();
    trackRAF = requestAnimationFrame(step);
  };
  trackRAF = requestAnimationFrame(step);
}
function drawTrack(){
  const cv = document.getElementById('trackcv');
  const ctx = cv.getContext('2d');
  const w = cv.width, h = cv.height;
  ctx.clearRect(0,0,w,h);
  ctx.beginPath();
  trackPts.forEach((p,i)=>{ const q = toCanvas(p,w,h); i===0?ctx.moveTo(q[0],q[1]):ctx.lineTo(q[0],q[1]); });
  ctx.closePath();
  ctx.lineJoin='round';
  ctx.strokeStyle = '#262f3a'; ctx.lineWidth = 22; ctx.stroke();
  ctx.strokeStyle = '#3a4654'; ctx.lineWidth = 18; ctx.stroke();
  ctx.setLineDash([7,9]); ctx.strokeStyle = '#5a6877'; ctx.lineWidth = 1.5; ctx.stroke(); ctx.setLineDash([]);
  const sf = toCanvas(pointAt(0), w, h);
  ctx.fillStyle = '#e9eef4'; ctx.fillRect(sf[0]-3, sf[1]-12, 6, 24);
  ctx.fillStyle = '#0c1014';
  for(let k=0;k<4;k++) ctx.fillRect(sf[0]-3+(k%2)*3, sf[1]-12+k*6, 3, 6);
  if(S.red){
    ctx.fillStyle='rgba(225,6,0,.18)'; ctx.fillRect(0,0,w,h);
    ctx.fillStyle='#ff6e66'; ctx.font='italic bold 22px sans-serif'; ctx.textAlign='center';
    ctx.fillText(t('st.red'), w/2, h/2);
    return;
  }
  if(S.sc>0){
    const lead = S.cars.filter(x=>!x.out).sort((a,b)=>b.vp-a.vp)[0];
    if(lead){ const q = toCanvas(pointAt(lead.vp + 0.02), w, h);
      ctx.fillStyle = '#ffd400';
      ctx.beginPath(); ctx.arc(q[0], q[1], 7, 0, 7); ctx.fill();
      ctx.fillStyle='#241d00'; ctx.font='bold 8px sans-serif'; ctx.textAlign='center'; ctx.fillText('SC', q[0], q[1]+3);
    }
  }
  S.cars.forEach(car=>{
    if(car.out) return;
    const q = toCanvas(pointAt(car.vp), w, h);
    ctx.beginPath(); ctx.arc(q[0], q[1], car.me?7:5, 0, 7);
    ctx.fillStyle = TEAMCOL[car.team] || '#999'; ctx.fill();
    if(car.me){
      ctx.lineWidth = 2.5; ctx.strokeStyle = '#ffb000'; ctx.stroke();
      ctx.fillStyle = '#ffb000'; ctx.font = 'italic bold 10px sans-serif'; ctx.textAlign='center';
      ctx.fillText(LANG==='it'?'TU':'YOU', q[0], q[1]-11);
    }
  });
}

const TYCOL = {S:'#ff2d2d',M:'#ffd400',H:'#ececec',I:'#3fb950',W:'#2f81f7'};
function drawLapChart(){
  const cv = document.getElementById('lapchart');
  if(!cv) return;
  const ctx = cv.getContext('2d');
  const w = cv.width, h = cv.height;
  ctx.clearRect(0,0,w,h);
  const all = S.myLaps;
  if(all.length<2){
    ctx.fillStyle='#0b1117';ctx.fillRect(0,0,w,h);
    ctx.strokeStyle='rgba(136,150,166,.16)';ctx.lineWidth=1;
    for(let x=0;x<w;x+=40){ctx.beginPath();ctx.moveTo(x,0);ctx.lineTo(x,h);ctx.stroke();}
    for(let y=0;y<h;y+=30){ctx.beginPath();ctx.moveTo(0,y);ctx.lineTo(w,y);ctx.stroke();}
    ctx.fillStyle='#8896a6';ctx.font='italic 12px sans-serif';ctx.textAlign='center';
    ctx.fillText(LANG==='it'?'La traccia dei tempi apparirà dopo il primo giro completato.':'The lap trace will appear after the first completed lap.',w/2,h/2);
    return;
  }
  const ts = all.map(x=>x.t);
  const mn = Math.min(...ts), mx = Math.max(...ts);
  const pad = 8, span = Math.max(2, mx-mn);
  const X = i => pad + i*(w-2*pad)/Math.max(1,all.length-1);
  const Y = v => h-pad - ((mx-v)/span)*(h-2*pad);
  for(let i=1;i<all.length;i++){
    ctx.beginPath();
    ctx.moveTo(X(i-1), Y(all[i-1].t));
    ctx.lineTo(X(i), Y(all[i].t));
    ctx.strokeStyle = all[i].sc ? '#5a6877' : (TYCOL[all[i].ty]||'#888');
    ctx.lineWidth = 2; ctx.stroke();
  }
  all.forEach((p,i)=>{
    if(p.pit){
      ctx.fillStyle = '#ffb000';
      ctx.beginPath(); ctx.moveTo(X(i), h-4); ctx.lineTo(X(i)-4, h-12); ctx.lineTo(X(i)+4, h-12); ctx.closePath(); ctx.fill();
    }
  });
  ctx.fillStyle = '#8896a6'; ctx.font = '10px sans-serif'; ctx.textAlign='left';
  ctx.fillText(mn.toFixed(1)+'s', 4, 12);
  ctx.fillText(mx.toFixed(1)+'s', 4, h-14);
}

/* ============ Fine gara + PAGELLA (i18n) ============ */
function endRace(abandoned){
  S.ended = true; clearInterval(autoTimer); autoTimer=null;
  flavorTimers.forEach(clearTimeout);
  const me = S.cars.find(x=>x.me);
  const M = S.metrics, L = LX(S.ci);
  const rainedEver = M.wxEver;
  let penal = [];
  if(me.pen>0){ me.time += me.pen; penal.push(fmt(t('res.penTL'), me.pen)); }
  if(!rainedEver && !me.out && !abandoned && me.used.size<2){ me.time += 25; penal.push(t('res.pen2c')); }
  const order = S.cars.filter(x=>!x.out).sort((a,b)=>a.time-b.time);
  const myPos = (me.out||abandoned) ? 99 : order.indexOf(me)+1;
  if(!abandoned) career.strat[S.ci] = myPos;
  const pts = (myPos<=10 && myPos!==99) ? POINTS[myPos-1] : 0;
  if(myPos!==99) career.stratPts += pts;

  const items = [];
  function item(ok, label, note){ items.push({ok, label, note}); }
  item(M.quiz===true, t('pg.quiz'), M.quiz===true?t('pg.quiz.ok'):M.quiz===false?t('pg.quiz.ko'):t('pg.quiz.skip'));
  if(rainedEver){
    item(M.slickRain<=2, t('pg.rain'), M.slickRain<=2 ? t('pg.rain.ok') : fmt(t('pg.rain.ko'), M.slickRain));
  }
  item(M.overWear===0, t('pg.wear'), M.overWear===0 ? t('pg.wear.ok') : fmt(t('pg.wear.ko'), M.overWear));
  const thermalBad=(M.hotLaps||0)+(M.coldLaps||0),thermalOk=thermalBad<=Math.max(4,Math.round(S.c.laps*.22));
  item(thermalOk,t('pg.thermal'),thermalOk?t('pg.thermal.ok'):fmt(t('pg.thermal.ko'),thermalBad));
  if(M.scHappened){
    const okSC = M.scPit || M.alreadyStoppedAtSC;
    item(okSC, t('pg.sc'), okSC ? t('pg.sc.ok') : t('pg.sc.ko'));
  }
  if(M.pen>0) item(false, t('pg.disc'), fmt(t('pg.disc.ko'), M.pen));
  if(!rainedEver && myPos!==99) item(me.used.size>=2, t('pg.2c'), me.used.size>=2?t('pg.2c.ok'):t('pg.2c.ko'));
  const energyOk=M.energyStarve<=1;
  item(energyOk,t('pg.energy'),energyOk?t('pg.energy.ok'):fmt(t('pg.energy.ko'),M.energyStarve));
  if(M.otQualified>0){
    const otOk=M.otMissedLowBattery===0;
    item(otOk,t('pg.ot'),otOk?fmt(t('pg.ot.ok'),M.otUsed,M.otQualified):fmt(t('pg.ot.ko'),M.otMissedLowBattery));
  }
  let lesOk = true, lesNote = '';
  switch(L.fx){
    case 'rain-commit': lesOk = !rainedEver || M.slickRain<=2; lesNote = rainedEver ? (lesOk?t('lc.rain.ok'):t('lc.rain.ko')) : t('lc.rain.na'); break;
    case 'sc-pit': case 'sc-late': lesOk = !M.scHappened || M.scPit || M.alreadyStoppedAtSC; lesNote = M.scHappened ? (lesOk?t('lc.sc.ok'):t('lc.sc.ko')) : t('lc.sc.na'); break;
    case 'tyre-cliff': lesOk = M.overWear===0 && M.spins===0; lesNote = lesOk?t('lc.cliff.ok'):t('lc.cliff.ko'); break;
    case 'track-position': lesOk = me.pits <= (rainedEver?2:1); lesNote = lesOk?t('lc.tp.ok'):t('lc.tp.ko'); break;
    case 'undercut': case 'offset': lesOk = myPos!==99 && myPos < M.grid; lesNote = lesOk?fmt(t('lc.uc.ok'), M.grid, myPos):t('lc.uc.ko'); break;
    case 'stops-math': lesOk = me.pits>=1 && me.pits<=2; lesNote = lesOk?t('lc.sm.ok'):t('lc.sm.ko'); break;
    case 'gamble-end': lesOk = M.slickRain<=2; lesNote = rainedEver?(lesOk?t('lc.ge.ok'):t('lc.ge.ko')):t('lc.ge.na'); break;
    case 'cold': lesOk = M.overWear===0; lesNote = lesOk?t('lc.cold.ok'):t('lc.cold.ko'); break;
    default: lesOk = myPos!==99 && me.used.size>=2; lesNote = lesOk?t('lc.flex.ok'):t('lc.flex.ko');
  }
  item(lesOk, t('pg.les')+L.t, lesNote);
  let voto = 10 - items.filter(x=>!x.ok).length*2 + (myPos===1?1:0);
  voto = Math.max(3, Math.min(10, voto));
  if(myPos!==99) career.voti[S.ci] = voto;

  let verdict = myPos===99 ? t('res.v.dnf') :
    myPos===1 ? t('res.v.win') :
    myPos<=3 ? t('res.v.podium') :
    myPos<=10 ? t('res.v.pts') : t('res.v.none');
  let rows = order.slice(0,10).map((cr,i)=>
    `<div class="resrow ${cr.me?'me':''}"><span>P${i+1}</span><span>${cr.name}</span><span>${POINTS[i]||0} pt</span></div>`).join('');
  if(myPos>10 && myPos!==99) rows += `<div class="resrow me"><span>P${myPos}</span><span>${me.name}</span><span>0 pt</span></div>`;
  const pag = items.map(x=>`<div class="pagrow"><span>${x.ok?'✅':'❌'}</span><span><b>${x.label}.</b> ${x.note}</span></div>`).join('');
  const tyreScore=Math.max(20,100-M.overWear*18-M.slickRain*8-Math.max(0,((M.hotLaps||0)+(M.coldLaps||0))-4)*1.4-(me.used.size<2&&!rainedEver?25:0));
  const energyScore=Math.max(20,100-M.energyStarve*20-M.otMissedLowBattery*18);
  const adaptScore=Math.max(20,100-M.spins*20-(M.scHappened&&!M.scPit&&!M.alreadyStoppedAtSC?20:0)-Math.max(0,M.slickRain-2)*10);
  const rulesScore=Math.max(20,100-M.pen*8-(me.used.size<2&&!rainedEver?30:0));
  const skillData=[[t('skills.tyres'),tyreScore],[t('skills.energy'),energyScore],[t('skills.adapt'),adaptScore],[t('skills.rules'),rulesScore]];
  const skills=skillData.map(([n,v])=>`<div class="skillcard"><b><span>${n}</span><span>${Math.round(v)}%</span></b><div class="skilltrack"><i style="width:${Math.round(v)}%"></i></div></div>`).join('');
  const decisions=(S.decisions||[]).length?(S.decisions||[]).map(d=>`<tr><td>${d.lap}</td><td><span class="decisionbadge">${d.kind}</span></td><td>${d.text}</td></tr>`).join(''):`<tr><td colspan="3">${t('decisions.none')}</td></tr>`;
  document.getElementById('results-content').innerHTML = `
    <span class="tag">${t('res.tag')}</span>
    <h1>${S.c.flag} ${gpName(S.ci)}</h1>
    <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px; max-width:1000px;" class="resgrid2">
      <div class="resbox" style="margin-top:0;">
        <h2 style="margin-top:0;">${myPos===99?t('res.dnf'):'P'+myPos} ${pts?fmt(t('res.pts'), pts):''}</h2>
        <p class="sub">${verdict} ${penal.join(' ')}</p>
        <div class="driverchip">${driverProfile().icon} <b>${driverTitle(S.driverProfile)}</b></div>
        ${rows}
      </div>
      <div class="resbox" style="margin-top:0;">
        <h2 style="margin-top:0;">${t('res.pagella')} <span class="voto">${voto}</span><span class="sub">/10</span></h2>
        ${pag}
      </div>
    </div>
    <div class="resbox skillsbox"><h2>${t('skills.h')}</h2><div class="skillsgrid">${skills}</div></div>
    <div class="resbox decisionlog"><h2>${t('decisions.h')}</h2><div style="overflow-x:auto"><table class="decisiontable"><thead><tr><th>${t('decisions.lap')}</th><th>${t('decisions.type')}</th><th>${t('decisions.call')}</th></tr></thead><tbody>${decisions}</tbody></table></div></div>
    <div class="ctrlrow" style="margin-top:12px;">
      <button class="btn primary" onclick="openGpSelect()">${t('res.cal')}</button>
      <button class="btn" onclick="openPreRace(${S.ci})">${t('res.retry')}</button>
      <button class="btn" onclick="openLesson(${S.ci},'pre')">${t('res.reread')}</button>
      <button class="btn" onclick="window.print()">🖨️ ${t('res.print')}</button>
    </div>
    <p class="sub" style="margin-top:10px;">${t('pts.career')}<b>${career.stratPts}</b></p>`;
  setLed('');
  cancelAnimationFrame(trackRAF); trackRAF=null;
  lastResultState={ci:S.ci,html:document.getElementById('results-content').innerHTML,ts:Date.now()};savePersistentState();
  showScreen('screen-results');
}
setLed('');
initApp();
