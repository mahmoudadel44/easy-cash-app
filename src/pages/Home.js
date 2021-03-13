import React from "react";
import Artboard from "../images/home/Artboard 423@3x 2.png";
import GooglePlay from "../images/home/googlePlay.png";
import AppStore from "../images/home/appStore.png";
import Mobile from "../images/home/mobile.png";
import "../styles/Home.css";
import PaymentWaysCard from "../components/PaymentWaysCard";
import ParticipationCard from "../components/ParticipationCard";
import PartnersCard from "../components/PartnersCard";
import Transfer from "../images/home/transfer.png";
import Atm from "../images/home/008   ATM.png";
import Onlinepay from "../images/home/onlinepay.png";
import payParCode from "../images/home/payparCode.png";
import Steps from "../images/home/steps.png";
import Happy from "../images/home/happy.png";
import Verified from "../images/home/verified.png";
import Application from "../images/home/application.png";
import Account from "../images/home/create account.png";
import Mera from "../images/home/mera.png";
import AhlyBank from "../images/home/AhlyBank.png";
import MasterCard from "../images/home/mastercard.png";
import Media from "../images/home/media.png";
const data = [
  {
    header: "QR الدفع بإستخدام كود ال",
    explanation: "QR ادفع بموبايلك فى أى مكان عن طريق كود ال ",
    paymentImg: <img src={payParCode} alt="payParCode" />,
  },
  {
    header: "تحويل فلوس",
    explanation: "حول فلوس لأى حد فى أى مكان من محفظة ايزى كاش",
    paymentImg: <img src={Transfer} alt="payParCode" />,
  },
  {
    header: "السحب والإيداع",
    explanation:
      "اسحب او ادع فلوس من ماكينات الصرف الآلى بإستخدام محفظة ايزى كاش",
    paymentImg: <img src={Atm} alt="payParCode" />,
  },
  {
    header: "كارت الدفع اونلاين",
    explanation: "اشترى او ادفع اونلاين بكارت الدفع من ايزى كاش",
    paymentImg: <img src={Onlinepay} alt="payParCode" />,
  },
];
const participationData = [
  {
    header: "استمتع بمحفظتك",
    explanation:
      "استمتع بمحفظة مليئه بالإمكانيات اللى هتوفرلك طرق دفع سهلة و أمنة",
    participationImg: <img src={Happy} alt="payParCode" />,
  },
  {
    header: "أنشأ رمزك السرى",
    explanation: "أنشأ رمزك السرى الخاص بمحفظتك",
    participationImg: <img src={Verified} alt="payParCode" />,
  },
  {
    header: "كمل تسجيل بياناتك",
    explanation:
      "زور أقرب فرع لايزى كاش واملا الإستمارة عشان تكمل عملية التسجيل",
    participationImg: <img src={Application} alt="payParCode" />,
  },
  {
    header: "انشأ حساب",
    explanation: "سجل بياناتك على أبليكيشن ايزى كاش",
    participationImg: <img src={Account} alt="payParCode" />,
  },
];
const Partners = [
  {
    PartnersImg: <img src={Mera} alt="Mera" />,
  },
  {
    PartnersImg: <img src={AhlyBank} alt="AhlyBank" />,
  },
  {
    PartnersImg: <img src={MasterCard} alt="MasterCard" />,
  },
  {
    PartnersImg: <img src={Media} alt="Media" />,
  },
];
const Home = () => {
  return (
    <div>
      <section className="introduction mt-5">
        <div className="container">
          <div className="row mt-5">
            <div className="col-md-5 col-sm-12 d-flex flex-column text-center downloads">
              <h4 className="purple downloadwallet">تنزيل المحفظة</h4>
              <p className="downloadorder">
                نزل ايزى كاش على موبايلك واستخدمها عشان تدفع بيها كل حاجة بسهولة
                وأمان
              </p>
              <div className="d-flex justify-content-between publications">
                <img className="" src={GooglePlay} alt="GroupPublish" />
                <img className="" src={AppStore} alt="AppStore" />
              </div>
            </div>
            <div
              className="col-md-7 col-sm-12 wow fadeIn Artboard"
              data-wow-duration="3s"
              data-wow-offset="300"
            >
              <img className="img1" src={Artboard} alt="Vector Smart" />
            </div>
          </div>
        </div>
      </section>
      <section className="introduction">
        <div className="container-fluid">
          <div className="row before mt-">
            <div
              className="col-md-5 col-sm-12 wow bounceInLeft payWays"
              data-wow-duration="2s"
              data-wow-offset="200"
            >
              <img
                className="img2 text-right mobileImg mt-5 mr-5"
                src={Mobile}
                alt="Vector Smart"
              />
            </div>
            <div
              className="col-md-6 col-sm-12 transformways"
              data-wow-duration="2s"
              data-wow-offset="200"
            >
              {data.map((item, index) => (
                <PaymentWaysCard data={item} key={index} />
              ))}
            </div>
            <div className="col-md-2"></div>
          </div>
        </div>
      </section>
      <section className="participations mb-5">
        <div className="container">
          <h3 className="text-center ParticipateTitle mt-5">تشترك ازاى</h3>
          <div className="text-center mt-3">
            <span className="text-center stepsHint">
              بإتباع الخطوات التالية
            </span>
            <img src={Steps} alt="steps" width="100%" className="mt-5 mb-3" />
          </div>
          <div className="row">
            {participationData.map((item, index) => (
              <div className="col-md-3 col-sm-6 text-center">
                <ParticipationCard participatedata={item} key={index} />
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="parteners">
        <div className="container">
          <h3 className="text-center ParticipateTitle">شركائنا</h3>
          <div className="row">
            {Partners.map((item, index) => (
              <div className="col-md-3 col-sm-6 text-center">
                <PartnersCard partnersdata={item} key={index} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
