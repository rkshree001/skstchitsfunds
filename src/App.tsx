import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/ThemeProvider";
import Index from "./pages/Index";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Calculator from "./pages/Calculator";
import Support from "./pages/Support";
import About from "./pages/About";
import Terms from "./pages/Terms";
import UserHome from "./pages/user/Home";
import UserDashboard from "./pages/user/Dashboard";
import AdminHome from "./pages/admin/Home";
import AdminDashboard from "./pages/admin/Dashboard";
import PaymentUpdate from "./pages/admin/PaymentUpdate";
import SadminHome from "./pages/sadmin/Home";
import SuperAdminDashboard from "./pages/sadmin/Dashboard";
import BranchManagement from "./pages/sadmin/BranchManagement";
import AddBranch from "./pages/sadmin/AddBranch";
import UserManagement from "./pages/admin/UserManagement";
import AddUser from "./pages/admin/AddUser";
import UserTransactions from "./pages/user/Transactions";
import MyChits from "./pages/user/MyChits";
import Auctions from "./pages/user/Auctions";
import KYC from "./pages/user/KYC";
import Referrals from "./pages/user/Referrals";
import PayoutCalculator from "./pages/user/PayoutCalculator";
import Payments from "./pages/user/Payments";
import Ledger from "./pages/user/Ledger";
import Analytics from "./pages/user/Analytics";
import Refunds from "./pages/user/Refunds";
import AIAssistant from "./pages/user/AIAssistant";
import Feedback from "./pages/user/Feedback";
import UserNotifications from "./pages/user/Notifications";
import UserDownloads from "./pages/user/Downloads";
import UserHelp from "./pages/user/Help";
import UserRewards from "./pages/user/Rewards";
import UserPassbook from "./pages/user/Passbook";
import ChitPlans from "./pages/user/ChitPlans";
import UserCalendar from "./pages/user/Calendar";
import AdminExpenses from "./pages/admin/Expenses";
import CustomReports from "./pages/admin/CustomReports";
import PaymentAging from "./pages/admin/PaymentAging";
import TaskScheduler from "./pages/admin/TaskScheduler";
import AdminChitHealth from "./pages/admin/ChitHealth";
import SupportHome from "./pages/support/Home";
import FieldTracking from "./pages/admin/FieldTracking";
import BranchPerformance from "./pages/admin/BranchPerformance";
import ActivityLog from "./pages/admin/ActivityLog";
import RoleManagement from "./pages/admin/RoleManagement";
import AdminNotifications from "./pages/admin/Notifications";
import AdminDownloads from "./pages/admin/Downloads";
import AdminHelp from "./pages/admin/Help";
import BranchOverview from "./pages/sadmin/BranchOverview";
import ComplianceReports from "./pages/sadmin/ComplianceReports";
import AIInsights from "./pages/sadmin/AIInsights";
import Settings from "./pages/sadmin/Settings";
import SupportLogin from "./pages/support/Login";
import SupportDashboard from "./pages/support/Dashboard";
import Tickets from "./pages/support/Tickets";
import BulkNotifications from "./pages/support/BulkNotifications";
import Onboarding from "./pages/support/Onboarding";
import Promotions from "./pages/support/Promotions";
import SadminDownloads from "./pages/sadmin/Downloads";
import SadminNotifications from "./pages/sadmin/Notifications";
import SadminHelp from "./pages/sadmin/Help";
import SupportDownloads from "./pages/support/Downloads";
import SupportNotifications from "./pages/support/Notifications";
import SupportHelp from "./pages/support/Help";
import NotFound from "./pages/NotFound";
import UserLayout from "./components/layouts/UserLayout";
import AdminLayout from "./components/layouts/AdminLayout";
import SadminLayout from "./components/layouts/SadminLayout";
import SupportLayout from "./components/layouts/SupportLayout";
import ChitLifecycle from "./pages/user/ChitLifecycle";
import AutoRenewal from "./pages/user/AutoRenewal";
import PlanTemplates from "./pages/user/PlanTemplates";
import QRPayment from "./pages/user/QRPayment";
import PenaltyCalculator from "./pages/user/PenaltyCalculator";
import ROIPrediction from "./pages/user/ROIPrediction";
import Leaderboard from "./pages/user/Leaderboard";
import AIAdvisor from "./pages/user/AIAdvisor";
import AccountOnboarding from "./pages/AccountOnboarding";
import EnhancedDashboard from "./pages/user/EnhancedDashboard";
import EnhancedPaymentCalendar from "./pages/user/EnhancedPaymentCalendar";
import EnhancedTransactions from "./pages/user/EnhancedTransactions";
import EnhancedAuctions from "./pages/user/EnhancedAuctions";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/account/onboarding" element={<AccountOnboarding />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/support" element={<Support />} />
          <Route path="/about" element={<About />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/user/home" element={<UserHome />} />
          <Route element={<UserLayout />}>
            <Route path="/user/dashboard" element={<UserDashboard />} />
            <Route path="/user/enhanced-dashboard" element={<EnhancedDashboard />} />
            <Route path="/user/transactions" element={<UserTransactions />} />
            <Route path="/user/enhanced-transactions" element={<EnhancedTransactions />} />
            <Route path="/user/my-chits" element={<MyChits />} />
            <Route path="/user/auctions" element={<Auctions />} />
            <Route path="/user/enhanced-auctions" element={<EnhancedAuctions />} />
            <Route path="/user/kyc" element={<KYC />} />
            <Route path="/user/referrals" element={<Referrals />} />
            <Route path="/user/rewards" element={<UserRewards />} />
            <Route path="/user/passbook" element={<UserPassbook />} />
            <Route path="/user/chit-plans" element={<ChitPlans />} />
            <Route path="/user/calendar" element={<UserCalendar />} />
            <Route path="/user/enhanced-calendar" element={<EnhancedPaymentCalendar />} />
            <Route path="/user/payout-calculator" element={<PayoutCalculator />} />
            <Route path="/user/payments" element={<Payments />} />
            <Route path="/user/ledger" element={<Ledger />} />
            <Route path="/user/analytics" element={<Analytics />} />
            <Route path="/user/refunds" element={<Refunds />} />
            <Route path="/user/ai-assistant" element={<AIAssistant />} />
            <Route path="/user/feedback" element={<Feedback />} />
            <Route path="/user/notifications" element={<UserNotifications />} />
            <Route path="/user/downloads" element={<UserDownloads />} />
            <Route path="/user/help" element={<UserHelp />} />
            <Route path="/user/chit-lifecycle" element={<ChitLifecycle />} />
            <Route path="/user/auto-renewal" element={<AutoRenewal />} />
            <Route path="/user/plan-templates" element={<PlanTemplates />} />
            <Route path="/user/qr-payment" element={<QRPayment />} />
            <Route path="/user/penalty-calculator" element={<PenaltyCalculator />} />
            <Route path="/user/roi-prediction" element={<ROIPrediction />} />
            <Route path="/user/leaderboard" element={<Leaderboard />} />
            <Route path="/user/ai-advisor" element={<AIAdvisor />} />
          </Route>
          <Route path="/admin/home" element={<AdminHome />} />
          <Route element={<AdminLayout />}>
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
            <Route path="/admin/payment-update" element={<PaymentUpdate />} />
            <Route path="/admin/user-management" element={<UserManagement />} />
            <Route path="/admin/add-user" element={<AddUser />} />
            <Route path="/admin/field-tracking" element={<FieldTracking />} />
            <Route path="/admin/branch-performance" element={<BranchPerformance />} />
            <Route path="/admin/activity-log" element={<ActivityLog />} />
            <Route path="/admin/role-management" element={<RoleManagement />} />
            <Route path="/admin/expenses" element={<AdminExpenses />} />
            <Route path="/admin/custom-reports" element={<CustomReports />} />
            <Route path="/admin/payment-aging" element={<PaymentAging />} />
            <Route path="/admin/task-scheduler" element={<TaskScheduler />} />
            <Route path="/admin/chit-health" element={<AdminChitHealth />} />
            <Route path="/admin/notifications" element={<AdminNotifications />} />
            <Route path="/admin/downloads" element={<AdminDownloads />} />
            <Route path="/admin/help" element={<AdminHelp />} />
          </Route>
          <Route path="/sadmin/home" element={<SadminHome />} />
          <Route element={<SadminLayout />}>
            <Route path="/sadmin/dashboard" element={<SuperAdminDashboard />} />
            <Route path="/sadmin/branch-management" element={<BranchManagement />} />
            <Route path="/sadmin/add-branch" element={<AddBranch />} />
            <Route path="/sadmin/branch-overview" element={<BranchOverview />} />
            <Route path="/sadmin/compliance-reports" element={<ComplianceReports />} />
            <Route path="/sadmin/ai-insights" element={<AIInsights />} />
            <Route path="/sadmin/settings" element={<Settings />} />
            <Route path="/sadmin/downloads" element={<SadminDownloads />} />
            <Route path="/sadmin/notifications" element={<SadminNotifications />} />
            <Route path="/sadmin/help" element={<SadminHelp />} />
          </Route>
          <Route path="/support/home" element={<SupportHome />} />
          <Route path="/support/login" element={<SupportLogin />} />
          <Route element={<SupportLayout />}>
            <Route path="/support/dashboard" element={<SupportDashboard />} />
            <Route path="/support/tickets" element={<Tickets />} />
            <Route path="/support/bulk-notifications" element={<BulkNotifications />} />
            <Route path="/support/onboarding" element={<Onboarding />} />
            <Route path="/support/promotions" element={<Promotions />} />
            <Route path="/support/downloads" element={<SupportDownloads />} />
            <Route path="/support/notifications" element={<SupportNotifications />} />
            <Route path="/support/help" element={<SupportHelp />} />
          </Route>
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      </TooltipProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
