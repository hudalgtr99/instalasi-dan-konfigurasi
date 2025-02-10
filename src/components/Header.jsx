/* eslint-disable react/prop-types */
export default function Header({name}){
  return(            
  //wajib menggunakan buka tutup    
  <>
      <h1>Belajar React bareng {name ? name : 'Miftah'}🚀</h1>
      <img src="img/img.png" width="80" alt="My Image"/>
      <p>Ini teks untuk template Belajar Latihan 1</p>
  </>);
}