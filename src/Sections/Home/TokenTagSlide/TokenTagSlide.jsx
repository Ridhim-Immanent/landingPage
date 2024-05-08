import React from 'react'
import styles from  "./Token.module.css"

const TokenTagSlide = () => {
  return (
    <>
    
      <div className={styles.TokenSlide}>

        <TagsDiv TgName="Metaverse" TgClass="skyblue"/>
        <TagsDiv TgName="DeFi" TgClass="skyblue2"/>
        <TagsDiv TgName="Wallet" TgClass="offwhite"/>
        <TagsDiv TgName="Blockchain" TgClass="skyblue3"/>
        <TagsDiv TgName="Apps" TgClass="pink"/>
        <TagsDiv TgName="Ecosystem" TgClass="yellow"/>
        <TagsDiv TgName="NFTs" TgClass="offwhite"/>
        <TagsDiv TgName="dApp" TgClass="yellowgreen"/>
        <TagsDiv TgName="Digital" TgClass="offwhite"/>
        <TagsDiv TgName="Metaverse" TgClass="skyblue"/>
        <TagsDiv TgName="DeFi" TgClass="skyblue2"/>
        <TagsDiv TgName="Wallet" TgClass="offwhite"/>
        <TagsDiv TgName="Blockchain" TgClass="skyblue3"/>
        <TagsDiv TgName="Apps" TgClass="pink"/>
        <TagsDiv TgName="Ecosystem" TgClass="yellow"/>
        <TagsDiv TgName="NFTs" TgClass="offwhite"/>
        <TagsDiv TgName="dApp" TgClass="yellowgreen"/>
        
        
        
      </div>



 


      
    </>
  )
}

export default TokenTagSlide

function TagsDiv({TgName,TgClass}) {
  return <div className={styles.TokenDiv}>
    <a className={TgClass} href="#">{TgName}</a>
  </div>
}
