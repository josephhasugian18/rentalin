import React from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import MemberLayout from "./layouts/MemberLayout";
import Landing from "./pages/Landing";
import Games from "./pages/Games";
import Consoles from "./pages/Consoles";
import Dashboard from "./pages/member/Dashboard";
import Orders from "./pages/member/Orders";
import Balance from "./pages/member/Balance";
import Paylater from "./pages/member/Paylater";
import Payment from "./pages/member/Payment";
import Saldo from "./pages/member/Saldo";
import AccountSettings from "./pages/member/AccountSettings";
import AccountVerification from "./pages/member/AccountVerification";
import { AuthProvider } from "./utils/AuthContext";

export default function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Landing />} />
          <Route path="/games" element={<Games />} />
          <Route path="/consoles" element={<Consoles />} />
        </Route>

        <Route element={<MemberLayout />}>
          <Route path="/member/dashboard" element={<Dashboard />} />
          <Route path="/member/orders" element={<Orders />} />
          <Route path="/member/balance" element={<Balance />} />
          <Route path="/member/paylater" element={<Paylater />} />
          <Route path="/member/payment" element={<Payment />} />
          <Route path="/member/saldo" element={<Saldo/>} />
          <Route path="/member/settings" element={<AccountSettings />} />
          <Route path="/member/verification" element={<AccountVerification />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
}
