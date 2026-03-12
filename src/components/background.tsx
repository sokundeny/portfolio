

const Background = () => {
  return (
    <div className="fixed -z-10 bg-Background w-screen h-screen">
      <div className="h-full w-full relative">
        <div className="absolute top-0 -left-64 w-lg aspect-square border border-text-secondary-muted rotate-60"/>
        <div className="absolute top-[30%] -right-44 w-lg aspect-square border border-text-secondary-muted rotate-60"/>
        <div className="absolute -bottom-32 -left-32 w-lg aspect-square border border-text-secondary-muted rotate-60"/>
      </div>
    </div>
  )
}

export default Background