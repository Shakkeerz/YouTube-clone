export const VideoCardLoading = () => {
  return <div className="w-[100px] h-[100px] bg-slate-600"></div>;
};
export const VideosLoading = ({
  width,
  height,
  hideItem,
  loadingCardMaping,
}) => (
  <section className="flex flex-wrap  gap-2 ">
    {loadingCardMaping.map((item) => (
      <div>
        <div className="w-[340px] h-[250px] rounded-2xl  bg-slate-600"></div>
        <section className="flex items-center">
          <div className="w-[50px] h-[50px] rounded-[50%] bg-slate-600  mr-5"></div>
          <div>
            <div className="mt-3 w-[250px] h-6 bg-slate-600"></div>
            <div className="mt-3 w-[200px] h-6 bg-slate-600"></div>
          </div>
        </section>
      </div>
    ))}
  </section>
);
