import { RedBeam } from "@/components/red-beam"
import { SocialMediaCard } from "@/components/social-media-card"
import { Facebook, Instagram, Twitter, Youtube, Twitch, DiscIcon as Discord } from "lucide-react"

// PASIFIXC social media profiles
const socialMediaProfiles = [
  {
    id: 1,
    platform: "Discord",
    username: "PASIFIXC Community",
    url: "https://discord.gg/pasifixc",
    icon: Discord,
    color: "from-red-500 to-red-700",
  },
]

export default function SocialsPage() {
  return (
    <div className="relative min-h-[calc(100vh-64px)] py-12">
      <RedBeam />

      {/* Horror elements */}
      <div className="absolute inset-0 bg-[url('/placeholder.svg?height=100&width=100')] bg-repeat opacity-5 mix-blend-overlay"></div>

      <div className="container mx-auto px-4 max-w-4xl z-10 relative">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          <span className="text-red-600 animate-pulse inline-block">;</span>Social Media
        </h1>

        <p className="text-center text-zinc-400 mb-10 max-w-xl mx-auto">
          Connect with PASIFIXC across our official social media channels to stay updated with our latest content and
          community events.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {socialMediaProfiles.map((profile) => (
            <SocialMediaCard key={profile.id} profile={profile} />
          ))}
        </div>
      </div>
    </div>
  )
}

