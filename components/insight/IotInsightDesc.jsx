export default function IotInsightDesc({division2}) {
  return (
    <>
      {division2 === "firmware" && (
        <div className="space-y-4">
          <p className="text-xs md:text-sm lg:text-base xl:text-xl 2xl:text-2xl">
            <b>
              Divisi <i>Firmware</i>
            </b>{" "}
            berfokus pada pengembangan sistem tertanam yang menjadi inti dari
            perangkat IoT.{" "}
            <b>
              <i>Firmware</i>
            </b>{" "}
            menghubungkan perangkat keras dengan perangkat lunak sehingga setiap
            sensor, aktuator, maupun modul dapat bekerja sesuai fungsinya. Tanpa
            firmware yang optimal, perangkat tidak akan mampu merespons maupun
            berkomunikasi secara cerdas.
          </p>
          <p className="text-xs md:text-sm lg:text-base xl:text-xl 2xl:text-2xl">
            Baca lebih dalam tentang peran{" "}
            <b>
              <i>Firmware</i>
            </b>{" "}
            di{" "}
            <b>
              <i>IoT Insight</i>!
            </b>
          </p>
        </div>
      )}

      {division2 === "hardware" && (
        <div className="space-y-2">
          <p className="text-xs md:text-sm lg:text-base xl:text-xl 2xl:text-2xl">
            <b>
              Divisi <i>Hardware</i>
            </b>{" "}
            bertanggung jawab atas perancangan dan pengembangan perangkat fisik
            IoT, mulai dari sensor, mikrokontroler, hingga modul komunikasi.
            Kualitas hardware menentukan seberapa handal perangkat IoT dalam
            mengumpulkan data dan menjalankan fungsi di lapangan.
          </p>
          <p className="text-xs md:text-sm lg:text-base xl:text-xl 2xl:text-2xl">
            Pelajari inovasi{" "}
            <b>
              <i>Hardware</i>
            </b>{" "}
            lebih lengkap di{" "}
            <b>
              <i>IoT Insight</i>!
            </b>
          </p>
        </div>
      )}

      {division2 === "software" && (
        <div className="space-y-4">
          <p className="text-xs md:text-sm lg:text-base xl:text-xl 2xl:text-2xl">
            <b>
              Divisi <i>Software</i>
            </b>{" "}
            mengembangkan program dan aplikasi yang membuat data dari perangkat
            IoT dapat diproses, dianalisis, dan dimanfaatkan. Dari sistem
            operasi hingga integrasi cloud, software memastikan bahwa IoT tidak
            hanya bekerja, tapi juga memberikan nilai tambah melalui automasi
            dan kecerdasan buatan.
          </p>
          <p className="text-xs md:text-sm lg:text-base xl:text-xl 2xl:text-2xl">
            Cari tahu peran{" "}
            <b>
              <i>Software</i>
            </b>{" "}
            lebih lengkap di{" "}
            <b>
              <i>IoT Insight</i>!
            </b>
          </p>
        </div>
      )}

      {division2 === "ui/ux" && (
        <div className="space-y-4">
          <p className="text-xs md:text-sm lg:text-base xl:text-xl 2xl:text-2xl">
            Teknologi akan sia-sia tanpa pengalaman pengguna yang nyaman.
            <b> Divisi UI/UX</b> hadir untuk merancang antarmuka yang intuitif,
            interaktif, dan memudahkan pengguna dalam berinteraksi dengan
            perangkat IoT. Dari tampilan aplikasi hingga alur penggunaan,
            <b> UI/UX</b> memastikan inovasi IoT tidak hanya canggih, tapi juga
            ramah pengguna.
          </p>
          <p className="text-xs md:text-sm lg:text-base xl:text-xl 2xl:text-2xl">
            Temukan pentingnya <b>UI/UX</b> di{" "}
            <b>
              <i>IoT Insight</i>!
            </b>
          </p>
        </div>
      )}

      {division2 === "network" && (
        <div className="space-y-4">
          <p className="text-xs md:text-sm lg:text-base xl:text-xl 2xl:text-2xl">
            <b>
              Divisi <i>Network</i>
            </b>{" "}
            fokus pada konektivitas yang memungkinkan perangkat IoT saling
            terhubung. Dari protokol komunikasi, keamanan jaringan, hingga
            infrastruktur cloud,{" "}
            <b>
              divisi <i>network</i>
            </b>{" "}
            menjadi tulang punggung agar sistem IoT tetap terhubung dengan
            stabil, cepat, dan aman.
          </p>
          <p className="text-xs md:text-sm lg:text-base xl:text-xl 2xl:text-2xl">
            Baca lebih banyak tentang dunia{" "}
            <b>
              <i>Network</i>
            </b>{" "}
            di{" "}
            <b>
              <i>IoT Insight</i>!
            </b>
          </p>
        </div>
      )}
    </>
  );
}
