# mobxrepo



Endringslogg:

16.03.22 Kjørte > git pull  ---> fikk ikke tilgang: "git@github.com: Permission denied (publickey)."
Så jeg gikk til .ssh og kjørte ssh-add -l etc. Med id_ed25519_MiddleMac lagt til så fungerte git pull
--> dette betyr at det ikke er automatisk tilgang til GitHub fra MiddleMac OK

15.03.22 OK har klonet ned til MiddleMac. Laget .gitignore og lastet den filen opp.

15.03.22 Flyttet også et repo til MiddleMac via Airdrop (for sjekk)

15.03.22 Bruker GUI for å flytte filer til GitHub

Prøvde bruke automatiske kommandoer, men endte som rent npx create-app repo...
Satte det til mobxrepoFailed. Prøver igjen grafisk.

OK, fjernet vitalis-overvåkning, og fjernet /TodoList/ under /src/
Burde kunne hacke den på plass igjen. Mangler .gitignore, men ok.

Flyttet også over /public/ med diverse bildefiler, og html fil,
men slettet robots etc.
