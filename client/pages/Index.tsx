import DashboardLayout from "@/components/layout/DashboardLayout";
import EnhancedStatsCards from "@/components/dashboard/EnhancedStatsCards";
import ImprovedAnalyticsCharts from "@/components/dashboard/ImprovedAnalyticsCharts";
import InteractiveAnalyticsChart from "@/components/dashboard/InteractiveAnalyticsChart";
import DynamicAnalyticsChart from "@/components/dashboard/DynamicAnalyticsChart";
import DetailedOverview from "@/components/dashboard/DetailedOverview";
import PerformanceAnalytics from "@/components/dashboard/PerformanceAnalytics";
import DateRangePicker from "@/components/dashboard/DateRangePicker";
import React, { useEffect, useMemo, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";

export default function Index() {
  return (
    <DashboardLayout>
      <div className="space-y-8 bg-red-500 p-8 rounded-lg">
        <div className="page-header">
          <h1 className="text-2xl font-bold text-white">Welcome John Smith!</h1>
          <p className="text-white text-lg">Dashboard is loading...</p>
        </div>
      </div>
    </DashboardLayout>
  );
}
