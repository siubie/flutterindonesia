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

## Material Component

## Gesture 

## Mengubah Widget Sesuai Input

## Widget Lifecycle

## Keys

## Global Keys

## Referensi