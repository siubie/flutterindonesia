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
Pada widget ini anda dapat membuat text standar atau text custom yang dapat disesuaikan style nya

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