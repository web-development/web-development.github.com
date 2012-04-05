---
title: Unobstrusive Javascript
order: 10
---

In Zusammenhang mit jQuery werden die Fachbegriffe „graceful degradation“, „progressive enhancement“  und „unobstrusive“ verwendet. Dahinter verbergen sich zwei verwandte, aber verschiedene Konzepte:

### graceful und progressive

Die Library jQuery unterstützt das Prinzip der „graceful degradation“ – auch ohne Javascript sind Webseiten mit jQuery immer noch gut verwendbar. Dieses Prinzip wird auch „progressive enhancement“ genannt, und bezieht sich nicht nur auf Javascript, sondern auch auf andere „Zusatz-Technologien“ wie z.B. Flash.

Die Idee ist dabei immer die Gleich: man baut die Webseite zuerst ohne Javascript, und fügt dann Javascript hinzu (ohne die Verwendbarkeit ohne Javscript zu zerstören). Der Inhalt (Content) der Webseite bleibt auch ohne Javascript zugänglich.


![Abbildung 60: Die Rolle von Content, Darstellung und Programmierung (Unobstrusive Javascript)](/images/image267.png)

Von dieser Herangehensweise profitieren nicht nur Blinde, Menschen mit veralteten Browsern oder exotischen Ausgabegeräte. Auch für Suchmaschinen wie Google oder andere Programme die die Information aus den Webseiten weiter verarbeiten ist dieses Prinzip hilfreich.

Um zu testen, ob das wirkliche funktioniert kann man ganz einfach mit dem Firefox-AddOn QuickJava testen. Wie in Abbildung 61 gezeigt kann Javascript mit einem Klick deaktiviert werden.


![Abbildung 61: Javascript deaktivieren mit QuickJava in Firefox](/images/image269.png)

### unobstrusive

Bei der Verwendung von jQuery bleibt der HTML-Code „javascript-frei“: jQuery wird nur an einer Stelle, im Head des Dokuments eingebaut. Das nennt man „unobstrusive Javascript“.

<htmlcode>
  <script type = "text/javscript" 
            src  = "http://code.jquery.com/jquery-latest.js"></script>
  <script>
  $(document).ready(function(){ 
        // Javascript code here 
  }); 
  </script>
  </head>
  <body>
        <!--  plain html here, no onclick or onload or ... -->
  </body>
</htmlcode>

Die URL http://code.jquery.com/jquery-latest.js kann man für alle Webseiten die online sind verwenden: hinter code.jquery.com steht nicht nur ein Server, sondern der Amazon Simple Storage Services (s3). Nur wenn man offline Entwickeln will muss man die Library wirklich herunterladen.

