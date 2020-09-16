var d1 = "";
d1 = [{"name" : "Bobby Rush",
      "incumbent" : true,
      "democrat" : true,
      "percentage" : 87.1,
      "guncontrol" : "s",
      "cleanenergy" : "s",
      "affordablecare" : "s",
      "immigration" : "o",
      "defensespending" : "s",
      "taxes" : "o",
      "intervention" : "o",
      "abortion" : "o",
      "education" : "n",
      },
      {"name" : "Jimmy Tillman II",
      "incumbent" : false,
      "democrat" : false,
      "percentage" : 12.9,
      "guncontrol" : "n",
      "cleanenergy" : "n",
      "affordablecare" : "o",
      "immigration" : "n",
      "defensespending" : "n",
      "taxes" : "n",
      "intervention" : "n",
      "abortion" : "n",
      "education" : "n",         
      }]
var a1, a2, a3, a4, a5, a6, a7, a8, a9, a10, a11, a12, a13, a14, a15, a16, a17, a18, a19, a20, a21, a22, a23, a24, a25, a26, a27, a28, a29, a30, a31 = "";
var a = "";
if (d1[0].incumbent == true)
    {
        a += "Incumbent";
    }
else
    {
        a += "Challenger";
    }
a1 += a;
document.getElementById("d1r1c1").innerHTML = a1;
var b = "";
if (d1[1].incumbent == true)
    {
        b += "Incumbent";
    }
else
    {
        b += "Challenger";
    }
a2 += b;
document.getElementById("d1r1c3").innerHTML = a2;
a3 += d1[0].name;
document.getElementById("d1r2c1").innerHTML = a3;
a4 += d1[1].name;
document.getElementById("d1r2c3").innerHTML = a4;
