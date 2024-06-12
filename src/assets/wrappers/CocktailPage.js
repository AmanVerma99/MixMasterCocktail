import styled from 'styled-components';

const Wrapper = styled.div`
  header {
    text-align: center;
    margin-bottom: 3rem;
    .btn {
      margin-bottom: 1rem;
    }
  }
    .drink{
      // padding: 30%;
      display : flex;
      align-item: center;
      justify-content: center;
      gap: 40px;
    }
  .img {
    border-radius: var(--borderRadius);
    width:35vw;
    height:50vh;
    margin-left:10vw;
    // padding: 10%;
  }
  .drink-info {
    padding-top: 2rem;

  }
  .drink p {
    font-weight: 700;
    text-transform: capitalize;
    line-height: 2;
    margin-bottom: 1rem;
  }
  .drink-data {
    margin-right: 0.5rem;
    background: var(--primary-300);
    padding: 0.25rem 0.5rem;
    border-radius: var(--borderRadius);
    color: var(--primary-700);
    letter-spacing: var(--letterSpacing);
  }
  .ing {
    display: inline-block;
    margin-right: 0.5rem;
  }
    @media screen and (max-width:700px){
    .drink{
    display:grid;
    }
    .img{
    width : 70vw;
    }
  @media (min-width: 992px) {
    .drink {
      display: grid;
      grid-template-columns: 2fr 3fr;
      gap: 3rem;
      align-items: center;
      // padding: 20px;
    }
    .drink-info {
      padding-top: 0;
      // padding-left: 10px;
      margin-left:10px;
    }
     .infor{
    //  backgrounf-color:red;
    //  margin-left:10px;
     }
  }
`;

export default Wrapper;
