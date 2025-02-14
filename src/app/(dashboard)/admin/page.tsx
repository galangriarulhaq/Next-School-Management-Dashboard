import UserCard from "@/components/UserCard";

const AdminPage = () => {
  return (
    <div className="flex flex-col p-4 gap-4 md:flex-row">
      {/* Left */}
      <div className="w-full lg:w-2/3">
        <div className="flex gap-4 justify-between flex-wrap">
          <UserCard type="student" />
          <UserCard type="teacher" />
          <UserCard type="parent" />
          <UserCard type="staff" />
        </div>
      </div>
      {/* Right */}
      <div className="w-full lg:w-1/3">R</div>
    </div>
  );
};

export default AdminPage;
