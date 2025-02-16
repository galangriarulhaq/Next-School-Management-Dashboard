const Announcements = () => {
  return (
    <div className="bg-white rounded-md p-4">
      <div className="flex items-center justify-between">
        <h1 className="font-semibold text-xl">Announcements</h1>
        <span className="text-xs text-gray-400">View All</span>
      </div>
      <div className="flex flex-col gap-4 mt-4">
        <div className="bg-sSkyLight p-4 rounded-md">
          <div className="flex items-center justify-between">
            <h2 className="font-medium">Lorem ipsum dolor</h2>
            <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">2025-16-02</span>
          </div>
          <p className="text-sm text-gray-400 mt-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum veritatis quia perferendis corrupti impedit obcaecati veniam cupiditate dolorum saepe minus</p>
        </div>
        <div className="bg-sPurpleLight p-4 rounded-md">
          <div className="flex items-center justify-between">
            <h2 className="font-medium">Lorem ipsum dolor</h2>
            <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">2025-16-02</span>
          </div>
          <p className="text-sm text-gray-400 mt-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum veritatis quia perferendis corrupti impedit obcaecati veniam cupiditate dolorum saepe minus</p>
        </div>
        <div className="bg-sYellowLight p-4 rounded-md">
          <div className="flex items-center justify-between">
            <h2 className="font-medium">Lorem ipsum dolor</h2>
            <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">2025-16-02</span>
          </div>
          <p className="text-sm text-gray-400 mt-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Earum veritatis quia perferendis corrupti impedit obcaecati veniam cupiditate dolorum saepe minus</p>
        </div>
      </div>
    </div>
  );
};

export default Announcements;
