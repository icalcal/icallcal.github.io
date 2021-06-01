let nama, val;
const url_string = document.URL;
const url = new URL(url_string);
let sender;

if (url.searchParams.get('by') != null) {
  sender = url.searchParams.get('by');
} else {
  sender = "";
}


document.querySelector(".tombol").addEventListener('click', function () {
  Swal.fire("Hallo", "saya ada pertanyaan nih buat kamu", "question").then(function () {
    Swal.fire("Jawab yang jujur ya!").then(function () {
      Swal.fire("Awas aja kalau bohong", "", "error").then(function () {

        const {
          value: name
        } = Swal.fire({
          title: 'Masukin nama kamu dulu',
          input: 'text',
          inputLabel: '',
          showCancelButton: true,
          inputValidator: (value) => {
            if (!value) {
              return 'Isi dulu dong'
            } else {
              nama = value;
            }
          }
        }).then(function () {
          const pertanyaan = Swal.fire({
            title: `${nama} Udah makan ${sender}?`,
            showDenyButton: true,
            showCancelButton: false,
            confirmButtonText: `Udah dongg pasti :)`,
            denyButtonText: `Belum mau dietttt`,
          }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
              Swal.fire(`${sender} Uwahh  ${nama} Kalo soal makan no 1 yakin wkwk`).then(function () {
                Swal.fire({
                  title: 'Kalo boleh tau seberapa sayang sih kamu dengan kesehatan mu',
                  icon: 'question',
                  input: 'range',
                  inputLabel: 'Antara 1 - 100 ya',
                  inputAttributes: {
                    min: 1,
                    max: 100,
                    step: 1
                  },
                  inputValue: 50
                }).then((e) => {
                  val = e.value
                  Swal.fire(`Tetap jaga kesehatan kamu yaa ${sender} ${val}%`).then(function () {
                    Swal.fire({
                      title: `Sekarang ${nama} harus semangat yaa dan jaga kesehatan Jangan Galau terus Jangan Begadang :) ${sender}`,
                      showDenyButton: true,
                      showCancelButton: false,
                      confirmButtonText: `oke :D`,
                      denyButtonText: `Enggak`,
                    }).then((result) => {
                      /* Read more about isConfirmed, isDenied below */
                      if (result.isConfirmed) {
                        Swal.fire(`Duhh Kamu Pinter ${sender}   ${nama} , makasihhh yaa`).then(function () {
                          Swal.fire('Terakhir deh ').then(function () {
                            Swal.fire('Coba klik kata pengirim,itu dia yg buatin untuk tetap jaga kesehatan  :D')
                          })
                        })
                      } else if (result.isDenied) {
                        Swal.fire('yahhh , ga boleh ngomong gitu', '', 'error').then(function () {
                          Swal.fire('Yaudah deh :((')
                        })
                      }
                    })
                  })
                })
              })
            } else if (result.isDenied) {
              Swal.fire(`Ntr  ${nama} sakit:((`, '', 'error').then(function () {
                Swal.fire('Yaudah dehh  :((')
              })
            }
          })
        })
      });
    });
  });
});

