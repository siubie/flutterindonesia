(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{116:function(e,n,t){"use strict";t.d(n,"a",(function(){return c})),t.d(n,"b",(function(){return m}));var a=t(0),i=t.n(a);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function d(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,a,i=function(e,n){if(null==e)return{};var t,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var u=i.a.createContext({}),s=function(e){var n=i.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):d(d({},n),e)),t},c=function(e){var n=s(e.components);return i.a.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return i.a.createElement(i.a.Fragment,{},n)}},b=i.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,r=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),c=s(t),b=a,m=c["".concat(r,".").concat(b)]||c[b]||p[b]||l;return t?i.a.createElement(m,d(d({ref:n},u),{},{components:t})):i.a.createElement(m,d({ref:n},u))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,r=new Array(l);r[0]=b;var d={};for(var o in n)hasOwnProperty.call(n,o)&&(d[o]=n[o]);d.originalType=e,d.mdxType="string"==typeof e?e:a,r[1]=d;for(var u=2;u<l;u++)r[u]=t[u];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"},166:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/pengenalan-widget-79c6e53a0bdc06969b3077b3bf3b9c8d.png"},167:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/notes2-ca073377ff730e84e0b9389952110cb2.png"},168:function(e,n,t){"use strict";t.r(n),n.default=t.p+"assets/images/asset_folder-99e0a574818763fef954f5abeed75c8e.png"},83:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return r})),t.d(n,"metadata",(function(){return d})),t.d(n,"toc",(function(){return o})),t.d(n,"default",(function(){return s}));var a=t(3),i=t(8),l=(t(0),t(116)),r={title:"Pengenalan Widget",slug:"/"},d={unversionedId:"01-pengenalan-widget",id:"01-pengenalan-widget",isDocsHomePage:!1,title:"Pengenalan Widget",description:"Widget di Flutter",source:"@site/docs/01-pengenalan-widget.md",slug:"/",permalink:"/flutterindonesia/docs/",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/01-pengenalan-widget.md",version:"current",sidebar:"docs",next:{title:"Layout di Flutter",permalink:"/flutterindonesia/docs/02-layout-di-flutter"}},o=[{value:"Widget di Flutter",id:"widget-di-flutter",children:[]},{value:"Hello World",id:"hello-world",children:[]},{value:"Basic Widgets",id:"basic-widgets",children:[{value:"Text",id:"text",children:[]},{value:"Row",id:"row",children:[]},{value:"Column",id:"column",children:[]},{value:"Container",id:"container",children:[]}]},{value:"Contoh Project",id:"contoh-project",children:[{value:"Cek Function Main",id:"cek-function-main",children:[]},{value:"Cek Class MyScaffold",id:"cek-class-myscaffold",children:[]},{value:"Cek Class MyAppBar",id:"cek-class-myappbar",children:[]}]},{value:"Material Component",id:"material-component",children:[]},{value:"Gesture",id:"gesture",children:[]},{value:"Mengubah Widget Sesuai Input",id:"mengubah-widget-sesuai-input",children:[]},{value:"Widget Lifecycle",id:"widget-lifecycle",children:[]},{value:"Keys",id:"keys",children:[]},{value:"Global Keys",id:"global-keys",children:[]},{value:"Referensi",id:"referensi",children:[]}],u={toc:o};function s(e){var n=e.components,r=Object(i.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},u,r,{components:n,mdxType:"MDXLayout"}),Object(l.b)("h2",{id:"widget-di-flutter"},"Widget di Flutter"),Object(l.b)("p",null,Object(l.b)("img",{alt:"Pengenalan Widget",src:t(166).default})),Object(l.b)("p",null,"Widget di flutter sangat terinspirasi oleh React, oleh karena itu akan sangat membantu jika sebelum membuat aplikasi menggunakan flutter anda pernah membuat aplikasi web menggunakan ",Object(l.b)("a",{parentName:"p",href:"https://reactjs.org"},"React"),"."),Object(l.b)("p",null,"Ketika membuat aplikasi menggunakan flutter anda akan membuatnya dengan menyusun berbagai macam widget kedalam sebuah UI tree. Baik UI yang sederhana sampai UI yang kompleks semuanya akan dibangun menggunakan widget. "),Object(l.b)("p",null,"Untuk merender sebuah widget ke UI flutter membutuhkan informasi berupa konfigurasi dan state, konfigurasi dan state inilah yang akan membantu flutter menentukan seperti apa sebuah widget ditampilkan. "),Object(l.b)("p",null,"State merupakan informasi yang istimewa yang dapat dimiliki oleh sebuah widget dimana ketika state mengalami perubahan widget yang bersangkutan akan dirender ulang. "),Object(l.b)("p",null,"Proses merender ulang ini ditangani oleh framework flutter secara internal. Perubahan ini dilakukan dengan mendeteksi perbedaan deskripsi widget sekarang dengan deskripsi widget sebelumnya sehingga dapat menemukan cara tercepat untuk merubah UI tree sesuai dengan state yang baru."),Object(l.b)("h2",{id:"hello-world"},"Hello World"),Object(l.b)("p",null,"Untuk mencoba hello world project mari dimulai dari new flutter project dan lakukan clean up semua starter code yang diberikan oleh flutter. Kemudian perhatikan lah kode program dibawah ini."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-dart",metastring:'title="main.dart"',title:'"main.dart"'},"import 'package:flutter/material.dart';\n\nvoid main() {\n  runApp(\n    Center(\n      child: Text(\n        'Hello, world!',\n        textDirection: TextDirection.ltr,\n      ),\n    ),\n  );\n}\n")),Object(l.b)("p",null,"Semua aplikasi flutter pada dasarnya adalah sebuah widget yang dijalankan oleh function runApp(). function runApp ini akan merender widget yang diberikan dan menjadikannya sebagai root dari widget tree yang kita buat. "),Object(l.b)("p",null,"Flutter framework akan mengambil root widget ini dan memaksa tampilannya memenuhi seluruh screen, jika mengikuti code yang ada di atas maka tulisan text hello world ini akan berada di tengah screen karena widget center yang menjadi parent nya akan di strech oleh flutter memenuhi screen dan text berada di tengah (karena widget center sifatnya memposisikan child widget ke posisi tengah dari parent nya). Khusus untuk kasus ini text direction harus di tuliskan secara eksplisit. Ada widget default yang istimewa yang dapat menghandle kasus kasus seperti ini contohnya MaterialApp yang nantinya akan membantu anda membuat aplikasi dengan tampilan material app dan menambahkan SafeArea untuk menghandle display widget lain ke dalam screen mobile."),Object(l.b)("p",null,Object(l.b)("img",{alt:"Hello World",src:t(167).default})),Object(l.b)("p",null,"Ketika membuat aplikasi nanti kita akan membuat sebuah widget custom yang dapat terdiri dari widget widget default dan dapat juga berupa widget baru yang merupakan subclass dari StatelessWidget atau StatefullWidget, untuk memilih stateless atau statefull tergantung pada kebutuhan widget baru yang akan anda buat."),Object(l.b)("p",null,"Untuk membuat sebuah widget baru caranya sangat sederhana cukup dengan extend Statelss atau Statefull widget kemudian override implementasi pada method build(), nah di dalam override function nya inilah kita dapat membuat ui dengan berbagai macam default widget yang di sediakan sehingga dapat membentuk sebuah widget dengan ui yang unik."),Object(l.b)("h2",{id:"basic-widgets"},"Basic Widgets"),Object(l.b)("p",null,"Flutter sudah menyediakan banyak widget basic yang dapat anda gunakan untuk membuat UI yang unik. Dari sekian banyak widget ada beberapa widget yang sering digunakan antara lain: "),Object(l.b)("h3",{id:"text"},"Text"),Object(l.b)("p",null,"Pada widget ini anda dapat membuat text standar atau text custom yang dapat disesuaikan style nya, Untuk membuat Text kita menggunakan widget Text(). Contoh pembuatan widget text dapat dilihat pada kode program berikut."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-dart"},'class MyApp extends StatelessWidget {\n  // This widget is the root of your application.\n  @override\n  Widget build(BuildContext context) {\n    return MaterialApp(\n      title: \'Flutter Demo\',\n      theme: ThemeData(\n        primarySwatch: Colors.blue,\n      ),\n      home: Scaffold(\n        appBar: AppBar(\n          title: Text("Demo Text"),\n        ),\n        body: Center(\n          child: Text("Hello World"),\n        ),\n      ),\n      debugShowCheckedModeBanner: false,\n    );\n  }\n}\n')),Object(l.b)("h4",{id:"font-size"},"Font Size"),Object(l.b)("p",null,"Untuk mengatur font size dapat dilakukan dengan menambahkan style pada Text widget, perhatikan kode program berikut ini untuk menambahkan style."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-dart"},'class MyApp extends StatelessWidget {\n  // This widget is the root of your application.\n  @override\n  Widget build(BuildContext context) {\n    return MaterialApp(\n      title: \'Flutter Demo\',\n      theme: ThemeData(\n        primarySwatch: Colors.blue,\n      ),\n      home: Scaffold(\n        appBar: AppBar(\n          title: Text(\n            "Demo Text",\n            // highlight-next-line\n            style: TextStyle(fontSize: 40),\n          ),\n        ),\n        body: Center(\n          child: Text(\n            "Hello World",\n            // highlight-next-line\n            style: TextStyle(fontSize: 40),\n          ),\n        ),\n      ),\n      debugShowCheckedModeBanner: false,\n    );\n  }\n}\n\n')),Object(l.b)("h4",{id:"font-weight"},"Font Weight"),Object(l.b)("p",null,"Untuk mengatur font weight kita dapat menggunakan option fontWeight pada widget TextStyle"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-dart"},'class MyApp extends StatelessWidget {\n  // This widget is the root of your application.\n  @override\n  Widget build(BuildContext context) {\n    return MaterialApp(\n      title: \'Flutter Demo\',\n      theme: ThemeData(\n        primarySwatch: Colors.blue,\n      ),\n      home: Scaffold(\n        appBar: AppBar(\n          title: Text(\n            "Demo Text",\n          ),\n        ),\n        body: Center(\n          child: Text(\n            "Hello World Tes",\n            style: TextStyle(\n              fontSize: 40,\n            // highlight-next-line\n              fontWeight: FontWeight.w600,\n            ),\n          ),\n        ),\n      ),\n      debugShowCheckedModeBanner: false,\n    );\n  }\n}\n\n')),Object(l.b)("h4",{id:"font-color"},"Font Color"),Object(l.b)("p",null,"Text widget juga dapat diberikan warna sesuai kebutuhan kita dengan menambahkan option color pada TextStyle nya."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-dart"},'class MyApp extends StatelessWidget {\n  // This widget is the root of your application.\n  @override\n  Widget build(BuildContext context) {\n    return MaterialApp(\n      title: \'Flutter Demo\',\n      theme: ThemeData(\n        primarySwatch: Colors.blue,\n      ),\n      home: Scaffold(\n        appBar: AppBar(\n          title: Text(\n            "Demo Text",\n          ),\n        ),\n        body: Center(\n          child: Text(\n            "Hello World Tes",\n            style: TextStyle(\n              fontSize: 40,\n              fontWeight: FontWeight.w600,\n              // highlight-next-line\n              color: Colors.deepPurple,\n            ),\n          ),\n        ),\n      ),\n      debugShowCheckedModeBanner: false,\n    );\n  }\n}\n')),Object(l.b)("h4",{id:"background-color"},"Background Color"),Object(l.b)("p",null,"Text Widget juga dapat diberi background color."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-dart"},'class MyApp extends StatelessWidget {\n  // This widget is the root of your application.\n  @override\n  Widget build(BuildContext context) {\n    return MaterialApp(\n      title: \'Flutter Demo\',\n      theme: ThemeData(\n        primarySwatch: Colors.blue,\n      ),\n      home: Scaffold(\n        appBar: AppBar(\n          title: Text(\n            "Demo Text",\n          ),\n        ),\n        body: Center(\n          child: Text(\n            "Hello World Tes",\n            style: TextStyle(\n              fontSize: 40,\n              fontWeight: FontWeight.w600,\n              color: Colors.deepPurple,\n              // highlight-next-line\n              backgroundColor: Colors.greenAccent,\n            ),\n          ),\n        ),\n      ),\n      debugShowCheckedModeBanner: false,\n    );\n  }\n}\n\n')),Object(l.b)("h4",{id:"font-style"},"Font Style"),Object(l.b)("p",null,"Font style yang ada di flutter dapat digunakan untuk membuat Text yang italic"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-dart"},'class MyApp extends StatelessWidget {\n  // This widget is the root of your application.\n  @override\n  Widget build(BuildContext context) {\n    return MaterialApp(\n      title: \'Flutter Demo\',\n      theme: ThemeData(\n        primarySwatch: Colors.blue,\n      ),\n      home: Scaffold(\n        appBar: AppBar(\n          title: Text(\n            "Demo Text",\n          ),\n        ),\n        body: Center(\n          child: Text(\n            "Hello World Tes",\n            style: TextStyle(\n              fontSize: 40,\n              fontWeight: FontWeight.w600,\n              color: Colors.deepPurple,\n              backgroundColor: Colors.greenAccent,\n              // highlight-next-line\n              fontStyle: FontStyle.italic,\n            ),\n          ),\n        ),\n      ),\n      debugShowCheckedModeBanner: false,\n    );\n  }\n}\n\n')),Object(l.b)("h4",{id:"letter-spacing"},"Letter Spacing"),Object(l.b)("p",null,"Spacing antar kata dan huruf di TextWidget juga dapat di atur jaraknya agar sesuai dengan kebutuhan."),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-dart"},'class MyApp extends StatelessWidget {\n  // This widget is the root of your application.\n  @override\n  Widget build(BuildContext context) {\n    return MaterialApp(\n      title: \'Flutter Demo\',\n      theme: ThemeData(\n        primarySwatch: Colors.blue,\n      ),\n      home: Scaffold(\n        appBar: AppBar(\n          title: Text(\n            "Demo Text",\n          ),\n        ),\n        body: Center(\n          child: Text(\n            "Hello World Tes",\n            style: TextStyle(\n                fontSize: 40,\n                fontWeight: FontWeight.w600,\n                color: Colors.deepPurple,\n                backgroundColor: Colors.greenAccent,\n                fontStyle: FontStyle.italic,\n                // highlight-next-line\n                letterSpacing: 5,\n                // highlight-next-line\n                wordSpacing: 5,\n                ),\n          ),\n        ),\n      ),\n      debugShowCheckedModeBanner: false,\n    );\n  }\n}\n\n')),Object(l.b)("p",null,"Catatan Tentang Line Height ",Object(l.b)("a",{parentName:"p",href:"https://stackoverflow.com/questions/58156806/how-do-set-text-line-height-in-flutter"},"Line Height")),Object(l.b)("h4",{id:"custom-font"},"Custom Font"),Object(l.b)("p",null,"Untuk menambahkan custom font cukup dengan membuat folder baru di folder project flutter, tidak ada penempatan atau rule khusus untuk penamaan folder namun demikian untuk membuat project lebih rapi dan mudah dibaca semua asset akan disimpan di folder assets. Untuk mencoba menambahkan font download lah 2 font berikut ini ",Object(l.b)("a",{parentName:"p",href:"https://www.dafontfree.net/freefonts-baskerville-regular-f114463.htm"},"Baskerville")," dan ",Object(l.b)("a",{parentName:"p",href:"https://fonts2u.com/ubuntu-light.font"},"Ubuntu Light")),Object(l.b)("p",null,"Setelah download simpanlah file tersebut di dalam folder assets/fonts , nanti nya kita juga akan menggunakan folder assets ini untuk menyimpan gambar"),Object(l.b)("p",null,Object(l.b)("img",{alt:"Folder Asset",src:t(168).default})),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-dart"},"class MyApp extends StatelessWidget {\n  // This widget is the root of your application.\n  @override\n  Widget build(BuildContext context) {\n    return MaterialApp(\n      title: 'Flutter Demo',\n      theme: ThemeData(\n        primarySwatch: Colors.blue,\n      ),\n      home: Scaffold(\n        appBar: AppBar(\n          title: Text(\n            \"Demo Text\",\n          ),\n        ),\n        body: Center(\n          child: Text(\n            \"Hello World Tes\",\n            style: TextStyle(\n              fontSize: 40,\n              fontWeight: FontWeight.w600,\n              color: Colors.deepPurple,\n              backgroundColor: Colors.greenAccent,\n                // highlight-next-line\n              fontStyle: FontStyle.normal,\n                // highlight-next-line\n              fontFamily: 'Baskerville',\n            ),\n          ),\n        ),\n      ),\n      debugShowCheckedModeBanner: false,\n    );\n  }\n}\n")),Object(l.b)("h4",{id:"global-theme"},"Global Theme"),Object(l.b)("p",null,"Global theme ini sama seperti css, dia akan mempermudah kita dalam melakukan styling terhadap text yang ada didalam aplikasi. Dengan membuat theme styling berada pada satu tempat kita akan jauh lebih mudah dalam memaintain styling text yang ada di aplikasi yang dibuat."),Object(l.b)("p",null,"Untuk menambahkan theme baru dapat dilakukan dengan menambahkan widget ThemeData ke MaterialApp."),Object(l.b)("p",null,"Layout untuk case study ",Object(l.b)("a",{parentName:"p",href:"https://www.sketchappsources.com/free-source/4663-simple-product-cards-sketch-freebie-resource.html"},"Simple Product Layout")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-dart"},'class MyApp extends StatelessWidget {\n  // This widget is the root of your application.\n  @override\n  Widget build(BuildContext context) {\n    return MaterialApp(\n      title: \'Flutter Demo\',\n      theme: ThemeData(\n        primarySwatch: Colors.blue,\n        fontFamily: \'Baskerville\',\n        textTheme: TextTheme(\n          headline1: TextStyle(fontSize: 30),\n          headline2: TextStyle(fontSize: 30, color: Color(0xff112134)),\n          bodyText1: TextStyle(\n            fontFamily: \'Ubuntu\',\n            fontWeight: FontWeight.w300,\n            fontSize: 14,\n            height: 1.8,\n          ),\n        ),\n      ),\n      home: Home(),\n      debugShowCheckedModeBanner: false,\n    );\n  }\n}\n\nclass Home extends StatelessWidget {\n  const Home({\n    Key key,\n  }) : super(key: key);\n\n  @override\n  Widget build(BuildContext context) {\n    return Scaffold(\n        appBar: AppBar(\n          title: Text(\n            "Demo Text",\n          ),\n        ),\n        body: Container(\n          padding: EdgeInsets.all(8),\n          child: Column(\n            crossAxisAlignment: CrossAxisAlignment.start,\n            children: [\n              Text(\n                "New Modern Vase",\n                style: Theme.of(context).textTheme.headline1,\n              ),\n              Text(\n                "Studiopepe for Atipico",\n                style: Theme.of(context).textTheme.headline2,\n              ),\n              Text(\n                "Italy is the stronghold of the creative designer. Founded in 2006 by Arianna Lelli Miami and Chiara Di Pinto ...",\n                style: Theme.of(context).textTheme.bodyText1,\n              ),\n            ],\n          ),\n        ));\n  }\n}\n\n')),Object(l.b)("p",null,"Sumber tulisan untuk pelajaran ini :"),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},Object(l.b)("a",{parentName:"p",href:"https://medium.com/flutter-community/beginners-guide-to-text-styling-in-flutter-3939085d6607"},"Medium Beginners Guide To Text Sytling"))),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},Object(l.b)("a",{parentName:"p",href:"https://pusher.com/tutorials/styled-text-flutter"},"Mastering Styled Text In Flutter"))),Object(l.b)("li",{parentName:"ol"},Object(l.b)("p",{parentName:"li"},Object(l.b)("a",{parentName:"p",href:"https://flutter.dev/docs/development/ui/widgets-intro"},"Flutter Dev")))),Object(l.b)("p",null,"Repository Github untuk codingan ini ada di ",Object(l.b)("a",{parentName:"p",href:"https://github.com/siubie/Flutter-Series-Text-Widget"},"Github Repo")," ada 8 branch silahkan di clone dan di checkout per step. Semangat Ngoding !!"),Object(l.b)("h3",{id:"row"},"Row"),Object(l.b)("p",null,"Pada widget row anda dapat membuat ui yang berbaris ke kanan, sesuai dengan urutan pada children dari widget ini."),Object(l.b)("h3",{id:"column"},"Column"),Object(l.b)("p",null,"Pada widget column anda dapat membuat ui yang terususun kebawah sesuai dengan urutan pada children dari widget ini."),Object(l.b)("p",null,"Perhatikan bahwa pada flutter kita dapat membuat nested widget yang berarti sebuah row dapat memiliki beberapa child column atau sebuah column dapat memiliki child satu atau lebih row."),Object(l.b)("h3",{id:"container"},"Container"),Object(l.b)("p",null,"Container merupakan widget yang mempermudah untuk membuat sebuah kotak, yang dapat diberi style menggunakan BoxDecorator. Container juga dapat memiliki margin padding, uniknya lagi container dapat ditransform (rotasi dll) dengan menggunakan matriks."),Object(l.b)("h2",{id:"contoh-project"},"Contoh Project"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-dart"},"import 'package:flutter/material.dart';\n\nclass MyAppBar extends StatelessWidget {\n  MyAppBar({required this.title});\n\n  // Fields in a Widget subclass are always marked \"final\".\n\n  final Widget title;\n\n  @override\n  Widget build(BuildContext context) {\n    return Container(\n      height: 56.0, // in logical pixels\n      padding: const EdgeInsets.symmetric(horizontal: 8.0),\n      decoration: BoxDecoration(color: Colors.blue[500]),\n      // Row is a horizontal, linear layout.\n      child: Row(\n        // <Widget> is the type of items in the list.\n        children: <Widget>[\n          IconButton(\n            icon: Icon(Icons.menu),\n            tooltip: 'Navigation menu',\n            onPressed: null, // null disables the button\n          ),\n          // Expanded expands its child\n          // to fill the available space.\n          Expanded(\n            child: title,\n          ),\n          IconButton(\n            icon: Icon(Icons.search),\n            tooltip: 'Search',\n            onPressed: null,\n          ),\n        ],\n      ),\n    );\n  }\n}\n\nclass MyScaffold extends StatelessWidget {\n  @override\n  Widget build(BuildContext context) {\n    // Material is a conceptual piece\n    // of paper on which the UI appears.\n    return Material(\n      // Column is a vertical, linear layout.\n      child: Column(\n        children: <Widget>[\n          MyAppBar(\n            title: Text(\n              'Example title',\n              style: Theme.of(context) //\n                  .primaryTextTheme\n                  .headline6,\n            ),\n          ),\n          Expanded(\n            child: Center(\n              child: Text('Hello, world!'),\n            ),\n          ),\n        ],\n      ),\n    );\n  }\n}\n\nvoid main() {\n  runApp(MaterialApp(\n    title: 'My app', // used by the OS task switcher\n    home: SafeArea(\n      child: MyScaffold(),\n    ),\n  ));\n}\n")),Object(l.b)("p",null,"Golden rule ngoding flutter adalah ",Object(l.b)("strong",{parentName:"p"},Object(l.b)("em",{parentName:"strong"},"Semua yang ada di layar adalah widget"))," dan Root Widget ada di function ",Object(l.b)("strong",{parentName:"p"},Object(l.b)("em",{parentName:"strong"},"runApp"))," jadi ketika ada kode program di widget periksalah ui nya dan cek function runApp sebelum memeriksa bagian yang lain."),Object(l.b)("h3",{id:"cek-function-main"},"Cek Function Main"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-dart"},"void main() {\n  runApp(MaterialApp(\n    title: 'My app', // used by the OS task switcher\n    home: SafeArea(\n      child: MyScaffold(),\n    ),\n  ));\n}\n")),Object(l.b)("p",null,"Di function ini kita dapat menemukan bahwa root widget nya adalah MaterialApp dimana material app mempunyai properties title dan home, di properties home berisi widget SafeArea dan di child dari SafeArea ada widget lagi yaitu MyScaffold."),Object(l.b)("p",null,"Dari sini dapat dilihat satu widget utama mempunyai satu anak dan satu cucu. Ingat lagi bahwa widget di flutter dapat berupa widget bawaan dari flutter dan widget custom yang kita definisikan sendiri SafeArea adalah widget bawaan dan MyScaffold adalah widget custom."),Object(l.b)("h3",{id:"cek-class-myscaffold"},"Cek Class MyScaffold"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-dart"},"class MyScaffold extends StatelessWidget {\n  @override\n  Widget build(BuildContext context) {\n    // Material is a conceptual piece\n    // of paper on which the UI appears.\n    return Material(\n      // Column is a vertical, linear layout.\n      child: Column(\n        children: <Widget>[\n          MyAppBar(\n            title: Text(\n              'Example title',\n              style: Theme.of(context) //\n                  .primaryTextTheme\n                  .headline6,\n            ),\n          ),\n          Expanded(\n            child: Center(\n              child: Text('Hello, world!'),\n            ),\n          ),\n        ],\n      ),\n    );\n  }\n}\n")),Object(l.b)("p",null,"Perhatikan class MyScaffold, kelas ini dibuat sesuai dengan aturan pembuatan sebuah widget yaitu merupakan class yang extend ke StatelessWidget atau StatefullWidget dan mengoverride function build."),Object(l.b)("h3",{id:"cek-class-myappbar"},"Cek Class MyAppBar"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-dart"},"\nclass MyAppBar extends StatelessWidget {\n  MyAppBar({required this.title});\n\n  // Fields in a Widget subclass are always marked \"final\".\n\n  final Widget title;\n\n  @override\n  Widget build(BuildContext context) {\n    return Container(\n      height: 56.0, // in logical pixels\n      padding: const EdgeInsets.symmetric(horizontal: 8.0),\n      decoration: BoxDecoration(color: Colors.blue[500]),\n      // Row is a horizontal, linear layout.\n      child: Row(\n        // <Widget> is the type of items in the list.\n        children: <Widget>[\n          IconButton(\n            icon: Icon(Icons.menu),\n            tooltip: 'Navigation menu',\n            onPressed: null, // null disables the button\n          ),\n          // Expanded expands its child\n          // to fill the available space.\n          Expanded(\n            child: title,\n          ),\n          IconButton(\n            icon: Icon(Icons.search),\n            tooltip: 'Search',\n            onPressed: null,\n          ),\n        ],\n      ),\n    );\n  }\n}\n")),Object(l.b)("h2",{id:"material-component"},"Material Component"),Object(l.b)("h2",{id:"gesture"},"Gesture"),Object(l.b)("h2",{id:"mengubah-widget-sesuai-input"},"Mengubah Widget Sesuai Input"),Object(l.b)("h2",{id:"widget-lifecycle"},"Widget Lifecycle"),Object(l.b)("h2",{id:"keys"},"Keys"),Object(l.b)("h2",{id:"global-keys"},"Global Keys"),Object(l.b)("h2",{id:"referensi"},"Referensi"))}s.isMDXComponent=!0}}]);