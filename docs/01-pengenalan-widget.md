---
title: Pengenalan Widget
slug : /
---

## Widget di Flutter 


![Pengenalan Widget](/img/pengenalan-widget.png)

Widget di flutter sangat terinspirasi oleh React, oleh karena itu akan sangat membantu jika sebelum membuat aplikasi menggunakan flutter anda pernah membuat aplikasi web menggunakan [React](https://reactjs.org).

Ketika membuat aplikasi menggunakan flutter anda akan membuatnya dengan menyusun berbagai macam widget kedalam sebuah UI tree. Baik UI yang sederhana sampai UI yang kompleks semuanya akan dibangun menggunakan widget. 

Untuk merender sebuah widget ke UI flutter membutuhkan informasi berupa konfigurasi dan state, konfigurasi dan state inilah yang akan membantu flutter menentukan seperti apa sebuah widget ditampilkan. 

State merupakan informasi yang istimewa yang dapat dimiliki oleh sebuah widget dimana ketika state mengalami perubahan widget yang bersangkutan akan dirender ulang. 

Proses merender ulang ini ditangani oleh framework flutter secara internal. Perubahan ini dilakukan dengan mendeteksi perbedaan deskripsi widget sekarang dengan deskripsi widget sebelumnya sehingga dapat menemukan cara tercepat untuk merubah UI tree sesuai dengan state yang baru.


## Hello World
Untuk mencoba hello world project mari dimulai dari new flutter project dan lakukan clean up semua starter code yang diberikan oleh flutter. Kemudian perhatikan lah kode program dibawah ini.

```dart title="main.dart"
import 'package:flutter/material.dart';

void main() {
  runApp(
    Center(
      child: Text(
        'Hello, world!',
        textDirection: TextDirection.ltr,
      ),
    ),
  );
}
```
Semua aplikasi flutter pada dasarnya adalah sebuah widget yang dijalankan oleh function runApp(). function runApp ini akan merender widget yang diberikan dan menjadikannya sebagai root dari widget tree yang kita buat. 

Flutter framework akan mengambil root widget ini dan memaksa tampilannya memenuhi seluruh screen, jika mengikuti code yang ada di atas maka tulisan text hello world ini akan berada di tengah screen karena widget center yang menjadi parent nya akan di strech oleh flutter memenuhi screen dan text berada di tengah (karena widget center sifatnya memposisikan child widget ke posisi tengah dari parent nya). Khusus untuk kasus ini text direction harus di tuliskan secara eksplisit. Ada widget default yang istimewa yang dapat menghandle kasus kasus seperti ini contohnya MaterialApp yang nantinya akan membantu anda membuat aplikasi dengan tampilan material app dan menambahkan SafeArea untuk menghandle display widget lain ke dalam screen mobile.

![Hello World](/img/notes2.png)

Ketika membuat aplikasi nanti kita akan membuat sebuah widget custom yang dapat terdiri dari widget widget default dan dapat juga berupa widget baru yang merupakan subclass dari StatelessWidget atau StatefullWidget, untuk memilih stateless atau statefull tergantung pada kebutuhan widget baru yang akan anda buat.

Untuk membuat sebuah widget baru caranya sangat sederhana cukup dengan extend Statelss atau Statefull widget kemudian override implementasi pada method build(), nah di dalam override function nya inilah kita dapat membuat ui dengan berbagai macam default widget yang di sediakan sehingga dapat membentuk sebuah widget dengan ui yang unik.

## Basic Widgets
Flutter sudah menyediakan banyak widget basic yang dapat anda gunakan untuk membuat UI yang unik. Dari sekian banyak widget ada beberapa widget yang sering digunakan antara lain: 

### Text
Pada widget ini anda dapat membuat text standar atau text custom yang dapat disesuaikan style nya, Untuk membuat Text kita menggunakan widget Text(). Contoh pembuatan widget text dapat dilihat pada kode program berikut.

```dart
class MyApp extends StatelessWidget {
  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: Scaffold(
        appBar: AppBar(
          title: Text("Demo Text"),
        ),
        body: Center(
          child: Text("Hello World"),
        ),
      ),
      debugShowCheckedModeBanner: false,
    );
  }
}
```

#### Font Size
Untuk mengatur font size dapat dilakukan dengan menambahkan style pada Text widget, perhatikan kode program berikut ini untuk menambahkan style.

```dart
class MyApp extends StatelessWidget {
  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: Scaffold(
        appBar: AppBar(
          title: Text(
            "Demo Text",
            // highlight-next-line
            style: TextStyle(fontSize: 40),
          ),
        ),
        body: Center(
          child: Text(
            "Hello World",
            // highlight-next-line
            style: TextStyle(fontSize: 40),
          ),
        ),
      ),
      debugShowCheckedModeBanner: false,
    );
  }
}

```
#### Font Weight 
Untuk mengatur font weight kita dapat menggunakan option fontWeight pada widget TextStyle

```dart
class MyApp extends StatelessWidget {
  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: Scaffold(
        appBar: AppBar(
          title: Text(
            "Demo Text",
          ),
        ),
        body: Center(
          child: Text(
            "Hello World Tes",
            style: TextStyle(
              fontSize: 40,
            // highlight-next-line
              fontWeight: FontWeight.w600,
            ),
          ),
        ),
      ),
      debugShowCheckedModeBanner: false,
    );
  }
}

```
#### Font Color 
Text widget juga dapat diberikan warna sesuai kebutuhan kita dengan menambahkan option color pada TextStyle nya.

```dart
class MyApp extends StatelessWidget {
  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: Scaffold(
        appBar: AppBar(
          title: Text(
            "Demo Text",
          ),
        ),
        body: Center(
          child: Text(
            "Hello World Tes",
            style: TextStyle(
              fontSize: 40,
              fontWeight: FontWeight.w600,
              // highlight-next-line
              color: Colors.deepPurple,
            ),
          ),
        ),
      ),
      debugShowCheckedModeBanner: false,
    );
  }
}
```
#### Background Color
Text Widget juga dapat diberi background color.

```dart
class MyApp extends StatelessWidget {
  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: Scaffold(
        appBar: AppBar(
          title: Text(
            "Demo Text",
          ),
        ),
        body: Center(
          child: Text(
            "Hello World Tes",
            style: TextStyle(
              fontSize: 40,
              fontWeight: FontWeight.w600,
              color: Colors.deepPurple,
              // highlight-next-line
              backgroundColor: Colors.greenAccent,
            ),
          ),
        ),
      ),
      debugShowCheckedModeBanner: false,
    );
  }
}

```
#### Font Style 
Font style yang ada di flutter dapat digunakan untuk membuat Text yang italic

```dart
class MyApp extends StatelessWidget {
  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: Scaffold(
        appBar: AppBar(
          title: Text(
            "Demo Text",
          ),
        ),
        body: Center(
          child: Text(
            "Hello World Tes",
            style: TextStyle(
              fontSize: 40,
              fontWeight: FontWeight.w600,
              color: Colors.deepPurple,
              backgroundColor: Colors.greenAccent,
              // highlight-next-line
              fontStyle: FontStyle.italic,
            ),
          ),
        ),
      ),
      debugShowCheckedModeBanner: false,
    );
  }
}

```
#### Letter Spacing
Spacing antar kata dan huruf di TextWidget juga dapat di atur jaraknya agar sesuai dengan kebutuhan.

```dart
class MyApp extends StatelessWidget {
  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: Scaffold(
        appBar: AppBar(
          title: Text(
            "Demo Text",
          ),
        ),
        body: Center(
          child: Text(
            "Hello World Tes",
            style: TextStyle(
                fontSize: 40,
                fontWeight: FontWeight.w600,
                color: Colors.deepPurple,
                backgroundColor: Colors.greenAccent,
                fontStyle: FontStyle.italic,
                // highlight-next-line
                letterSpacing: 5,
                // highlight-next-line
                wordSpacing: 5,
                ),
          ),
        ),
      ),
      debugShowCheckedModeBanner: false,
    );
  }
}

```
Catatan Tentang Line Height [Line Height](https://stackoverflow.com/questions/58156806/how-do-set-text-line-height-in-flutter)

#### Custom Font
Untuk menambahkan custom font cukup dengan membuat folder baru di folder project flutter, tidak ada penempatan atau rule khusus untuk penamaan folder namun demikian untuk membuat project lebih rapi dan mudah dibaca semua asset akan disimpan di folder assets. Untuk mencoba menambahkan font download lah 2 font berikut ini [Baskerville](https://www.dafontfree.net/freefonts-baskerville-regular-f114463.htm) dan [Ubuntu Light](https://fonts2u.com/ubuntu-light.font)

Setelah download simpanlah file tersebut di dalam folder assets/fonts , nanti nya kita juga akan menggunakan folder assets ini untuk menyimpan gambar

![Folder Asset](/img/asset_folder.png)

```dart
class MyApp extends StatelessWidget {
  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: Scaffold(
        appBar: AppBar(
          title: Text(
            "Demo Text",
          ),
        ),
        body: Center(
          child: Text(
            "Hello World Tes",
            style: TextStyle(
              fontSize: 40,
              fontWeight: FontWeight.w600,
              color: Colors.deepPurple,
              backgroundColor: Colors.greenAccent,
                // highlight-next-line
              fontStyle: FontStyle.normal,
                // highlight-next-line
              fontFamily: 'Baskerville',
            ),
          ),
        ),
      ),
      debugShowCheckedModeBanner: false,
    );
  }
}
```
#### Global Theme
Global theme ini sama seperti css, dia akan mempermudah kita dalam melakukan styling terhadap text yang ada didalam aplikasi. Dengan membuat theme styling berada pada satu tempat kita akan jauh lebih mudah dalam memaintain styling text yang ada di aplikasi yang dibuat.

Untuk menambahkan theme baru dapat dilakukan dengan menambahkan widget ThemeData ke MaterialApp.

Layout untuk case study [Simple Product Layout](https://www.sketchappsources.com/free-source/4663-simple-product-cards-sketch-freebie-resource.html)

```dart
class MyApp extends StatelessWidget {
  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Flutter Demo',
      theme: ThemeData(
        primarySwatch: Colors.blue,
        fontFamily: 'Baskerville',
        textTheme: TextTheme(
          headline1: TextStyle(fontSize: 30),
          headline2: TextStyle(fontSize: 30, color: Color(0xff112134)),
          bodyText1: TextStyle(
            fontFamily: 'Ubuntu',
            fontWeight: FontWeight.w300,
            fontSize: 14,
            height: 1.8,
          ),
        ),
      ),
      home: Home(),
      debugShowCheckedModeBanner: false,
    );
  }
}

class Home extends StatelessWidget {
  const Home({
    Key key,
  }) : super(key: key);

  @override
  Widget build(BuildContext context) {
    return Scaffold(
        appBar: AppBar(
          title: Text(
            "Demo Text",
          ),
        ),
        body: Container(
          padding: EdgeInsets.all(8),
          child: Column(
            crossAxisAlignment: CrossAxisAlignment.start,
            children: [
              Text(
                "New Modern Vase",
                style: Theme.of(context).textTheme.headline1,
              ),
              Text(
                "Studiopepe for Atipico",
                style: Theme.of(context).textTheme.headline2,
              ),
              Text(
                "Italy is the stronghold of the creative designer. Founded in 2006 by Arianna Lelli Miami and Chiara Di Pinto ...",
                style: Theme.of(context).textTheme.bodyText1,
              ),
            ],
          ),
        ));
  }
}

```
Sumber tulisan untuk pelajaran ini :
1. [Medium Beginners Guide To Text Sytling](https://medium.com/flutter-community/beginners-guide-to-text-styling-in-flutter-3939085d6607)

2. [Mastering Styled Text In Flutter](https://pusher.com/tutorials/styled-text-flutter)

3. [Flutter Dev](https://flutter.dev/docs/development/ui/widgets-intro)

Repository Github untuk codingan ini ada di [Github Repo](https://github.com/siubie/Flutter-Series-Text-Widget) ada 8 branch silahkan di clone dan di checkout per step. Semangat Ngoding !!

### Row
Pada widget row anda dapat membuat ui yang berbaris ke kanan, sesuai dengan urutan pada children dari widget ini.

### Column
Pada widget column anda dapat membuat ui yang terususun kebawah sesuai dengan urutan pada children dari widget ini.

Perhatikan bahwa pada flutter kita dapat membuat nested widget yang berarti sebuah row dapat memiliki beberapa child column atau sebuah column dapat memiliki child satu atau lebih row.

### Container
Container merupakan widget yang mempermudah untuk membuat sebuah kotak, yang dapat diberi style menggunakan BoxDecorator. Container juga dapat memiliki margin padding, uniknya lagi container dapat ditransform (rotasi dll) dengan menggunakan matriks.

## Contoh Project

```dart
import 'package:flutter/material.dart';

class MyAppBar extends StatelessWidget {
  MyAppBar({required this.title});

  // Fields in a Widget subclass are always marked "final".

  final Widget title;

  @override
  Widget build(BuildContext context) {
    return Container(
      height: 56.0, // in logical pixels
      padding: const EdgeInsets.symmetric(horizontal: 8.0),
      decoration: BoxDecoration(color: Colors.blue[500]),
      // Row is a horizontal, linear layout.
      child: Row(
        // <Widget> is the type of items in the list.
        children: <Widget>[
          IconButton(
            icon: Icon(Icons.menu),
            tooltip: 'Navigation menu',
            onPressed: null, // null disables the button
          ),
          // Expanded expands its child
          // to fill the available space.
          Expanded(
            child: title,
          ),
          IconButton(
            icon: Icon(Icons.search),
            tooltip: 'Search',
            onPressed: null,
          ),
        ],
      ),
    );
  }
}

class MyScaffold extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    // Material is a conceptual piece
    // of paper on which the UI appears.
    return Material(
      // Column is a vertical, linear layout.
      child: Column(
        children: <Widget>[
          MyAppBar(
            title: Text(
              'Example title',
              style: Theme.of(context) //
                  .primaryTextTheme
                  .headline6,
            ),
          ),
          Expanded(
            child: Center(
              child: Text('Hello, world!'),
            ),
          ),
        ],
      ),
    );
  }
}

void main() {
  runApp(MaterialApp(
    title: 'My app', // used by the OS task switcher
    home: SafeArea(
      child: MyScaffold(),
    ),
  ));
}
```

Golden rule ngoding flutter adalah ***Semua yang ada di layar adalah widget*** dan Root Widget ada di function ***runApp*** jadi ketika ada kode program di widget periksalah ui nya dan cek function runApp sebelum memeriksa bagian yang lain.


### Cek Function Main

```dart
void main() {
  runApp(MaterialApp(
    title: 'My app', // used by the OS task switcher
    home: SafeArea(
      child: MyScaffold(),
    ),
  ));
}
```

Di function ini kita dapat menemukan bahwa root widget nya adalah MaterialApp dimana material app mempunyai properties title dan home, di properties home berisi widget SafeArea dan di child dari SafeArea ada widget lagi yaitu MyScaffold.

Dari sini dapat dilihat satu widget utama mempunyai satu anak dan satu cucu. Ingat lagi bahwa widget di flutter dapat berupa widget bawaan dari flutter dan widget custom yang kita definisikan sendiri SafeArea adalah widget bawaan dan MyScaffold adalah widget custom.

### Cek Class MyScaffold

```dart
class MyScaffold extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    // Material is a conceptual piece
    // of paper on which the UI appears.
    return Material(
      // Column is a vertical, linear layout.
      child: Column(
        children: <Widget>[
          MyAppBar(
            title: Text(
              'Example title',
              style: Theme.of(context) //
                  .primaryTextTheme
                  .headline6,
            ),
          ),
          Expanded(
            child: Center(
              child: Text('Hello, world!'),
            ),
          ),
        ],
      ),
    );
  }
}
```

Perhatikan class MyScaffold, kelas ini dibuat sesuai dengan aturan pembuatan sebuah widget yaitu merupakan class yang extend ke StatelessWidget atau StatefullWidget dan mengoverride function build.

### Cek Class MyAppBar

```dart

class MyAppBar extends StatelessWidget {
  MyAppBar({required this.title});

  // Fields in a Widget subclass are always marked "final".

  final Widget title;

  @override
  Widget build(BuildContext context) {
    return Container(
      height: 56.0, // in logical pixels
      padding: const EdgeInsets.symmetric(horizontal: 8.0),
      decoration: BoxDecoration(color: Colors.blue[500]),
      // Row is a horizontal, linear layout.
      child: Row(
        // <Widget> is the type of items in the list.
        children: <Widget>[
          IconButton(
            icon: Icon(Icons.menu),
            tooltip: 'Navigation menu',
            onPressed: null, // null disables the button
          ),
          // Expanded expands its child
          // to fill the available space.
          Expanded(
            child: title,
          ),
          IconButton(
            icon: Icon(Icons.search),
            tooltip: 'Search',
            onPressed: null,
          ),
        ],
      ),
    );
  }
}
```
## Material Component

## Gesture 

## Mengubah Widget Sesuai Input

## Widget Lifecycle

## Keys

## Global Keys

## Referensi