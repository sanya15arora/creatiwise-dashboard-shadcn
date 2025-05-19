
export function NavUser({
  user,
}: {
  user: {
    name: string
    email: string
    avatar: string
  }
}) {

  return (
    <div className="flex items-center justify-between px-4 py-2 self-center">
      <span className="truncate font-bold text-3xl whitespace-nowrap">{user.name}</span>
    </div>
  )
}
