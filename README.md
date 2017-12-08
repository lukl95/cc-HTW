# HTW-Berlin-CloudComputing-2017

# Kurs Cloud Computing

## Vorbereitung:
- Node.js: https://nodejs.org/en/
- Virtuelles Windows 10: https://developer.microsoft.com/en-us/windows/downloads/virtual-machines
- Azure Pass: https://www.microsoftazurepass.com/
- Microsoft Account erstellen: https://account.microsoft.com/
- Fiddler: https://www.telerik.com/download/fiddler
- Postman: https://www.getpostman.com/

## Hello Node:
Wenn Sie NodeJs richtig auf Ihrem System installiert haben, können Sie in der Eingabeaufforderung folgenden Code ausführen:

![HelloNode](https://github.com/rherlt/HTW-Berlin-CloudComputing-2017/blob/master/img/HelloNode.png "HelloNode")


## Abgabe 1:

Vorbereitung zum 01.12.2017: Bitte informieren Sie sich über das [HTTP](https://de.wikipedia.org/wiki/Hypertext_Transfer_Protocol) Protokoll.

Sie haben die Aufgabe, eine Webanwendung in der Cloud bereitzustellen. Bevor Sie das Programm auf einem Server installieren, sollen Sie lokal an Ihrem Computer testen, ob das Programm auch wie gewünscht funktioniert.   
1. Führen Sie die Anwendung [HelloCloud.js](https://github.com/rherlt/HTW-Berlin-CloudComputing-2017/blob/master/HelloCloud.js) auf Ihrem Computer aus.  
2. Rufen Sie die Anwendung im Browser auf.  
3. Erstellen Sie eine HTTP-GET-Anfrage mithilfe eines HTTP-Debug-Programms. Speichern Sie Ihre Anfrage und die Antwort des Servers in einer Textdatei als „HTTP-Get.txt“  
4. Erstellen Sie eine HTTP-POST-Anfrage mithilfe eines HTTP-Debug-Programms. Speichern Sie Ihre Anfrage und die Antwort des Servers in einer Textdatei als „HTTP-Post.txt“  
5. Führen Sie die Anwendung [01-SimpleGet.js](https://github.com/rherlt/HTW-Berlin-CloudComputing-2017/blob/master/01-SimpleGet.js) auf Ihrem Computer aus. Erstellen Sie eine HTTP-GET-Anfrage mithilfe eines HTTP-Debug-Programms. Übergeben Sie folgende Parameter im Query-String:  
Parameter "ln": Ihren Nachnamen.  
Parameter "fn": Ihren Vornamen.  
Speichern Sie Ihre Anfrage und die Antwort des Servers in einer Textdatei als „01-SimpleGet.txt“.  
6. Führen Sie die Anwendung [02-SimpleJsonPost.js](https://github.com/rherlt/HTW-Berlin-CloudComputing-2017/blob/master/02-SimpleJsonPost.js) auf Ihrem Computer aus. Erstellen Sie eine HTTP-POST-Anfrage mithilfe eines HTTP-Debug-Programms. Übergeben Sie folgende Parameter im Query-String:  
Parameter "ln": Ihren Nachnamen.  
Parameter "fn": Ihren Vornamen.  
Übermitteln Sie außerdem eine E-Mail-Adresse Ihrer Wahl im Nachrichtenkörper.
Speichern Sie Ihre Anfrage und die Antwort des Servers in einer Textdatei als „02-SimpleJsonPost.txt“.  

Bonus-Aufgabe:
Ändern Sie den Code der [02-SimpleJsonPost.js](https://github.com/rherlt/HTW-Berlin-CloudComputing-2017/blob/master/02-SimpleJsonPost.js)-Anwendung so ab, dass die Anwendung in der Lage ist, in der Antwort-Nachricht den Benutzernamen und das Kennwort im Klartext anzuzeigen, sofern sich der Client mit der "Basic"-Authentication authentifiziert hat. Speichern Sie das Programm als "03-BasicAuth.js". Erstellen Sie eine HTTP-POST-Anfrage mithilfe eines HTTP-Debug-Programms. Speichern Sie Ihre Anfrage und die Antwort des Servers in einer Textdatei als „03-BasicAuth.txt“.

## Abgabe 2:

![One does not simply run Node.js on Microsoft Azure](https://i.imgflip.com/alvg4.jpg "One does not simply run Node.js on Microsoft Azure")  
Ihre Aufgabe besteht darin, die [HelloCloud.js](https://github.com/rherlt/HTW-Berlin-CloudComputing-2017/blob/master/HelloCloud.js) NodeJs-Anwendung in Microsoft Azure in Form von Platform as a Service auszuführen. Um diese Aufgabe zu bewerkstelligen, führen Sie folgende Teilaufgaben aus:    

1. Erstellen Sie ein neues, öffentlich erreichbares Github Quell-Code-Repository bei [github.com](https://github.com/)  
2. Sorgen Sie dafür, dass Sie die eine Server.js mit dem Quellcode im Repository haben.  
3. Zusätzlich benötigen Sie die Konfigurationsdateien [package.json](https://github.com/rherlt/HTW-Berlin-CloudComputing-2017/blob/master/package.json) und [process.json](https://github.com/rherlt/HTW-Berlin-CloudComputing-2017/blob/master/process.json) in Ihrem Repository, damit der Webserver in der Lage ist die eingehenden HTTP-Requests an die Node.js-Anwendung weiterzuleiten.
4. Verknüpfen Sie Ihr Github-Repository mit Ihrem Azure App Service und richten Sie [Continuous Delivery](https://de.wikipedia.org/wiki/Continuous_Delivery) ein.
5. Sorgen Sie dafür, dass Sie die [HelloCloud.js](https://github.com/rherlt/HTW-Berlin-CloudComputing-2017/blob/master/HelloCloud.js)-Anwendung erfolgreich ausführen können. (Hinweis: Listening-Port des Servers) 
6. Erstellen Sie eine HTTP-GET-Anfrage mithilfe eines HTTP-Debug-Programms. Speichern Sie Ihre Anfrage und die Antwort des Servers in einer Textdatei als „HTTP-Get.txt“  
7. Erstellen Sie eine HTTP-POST-Anfrage mithilfe eines HTTP-Debug-Programms. Speichern Sie Ihre Anfrage und die Antwort des Servers in einer Textdatei als „HTTP-Post.txt“    


Bonus-Aufgaben:  
1. Sorgen Sie dafür, dass die [03-BasicAuth.js](https://github.com/rherlt/HTW-Berlin-CloudComputing-2017/blob/master/03-BasicAuth.js)-Anwendung bei Ihnen läuft. Erstellen Sie dafür die notwendigen HTTP-Anfragen aus der Bonus-Aufgabe der vergangenen Woche.  
2. Implementieren Sie eine NodeJs Anwendung, die für einen Request die aktuelle Prozess-Id (des NodeJS-Prozesses im Server-Betriebssystem) zurück liefert. Sorgen Sie dafür, dass Ihre Anwendung auf drei Instanzen skaliert wird. Führen sie viele Requests auf Ihre Anwendung aus. Wenn Sie alles richtig gemacht haben, sehen sie drei verschiedene, immer wiederkehrende Prozess-Ids. Exportieren Sie das Ergebnis mit dem Fiddler. Hinweis: Sie benötigen dazu den Serviceplan Basic B1
