import React, { useEffect, useState } from "react";
import { Outlet, useNavigation } from "react-router-dom";

const AppLayout = () => {
  const [loading, isLoading] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    if (loading || navigation.state == "loading") {
      return <p>Loading....</p>;
    }
  }, []);

  return (
    <div>
      <Outlet />
    </div>
  );
};

export default AppLayout;
