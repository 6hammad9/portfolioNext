// Static imports so next/image gets each screenshot's real dimensions at build
// time — the prototype's SHOTS map only carries paths. Keyed by that same path.

import type { StaticImageData } from 'next/image'

import campusMarketplace from '@/public/projects/campus-marketplace.png'
import campusMarketplace2 from '@/public/projects/campus-marketplace-2.png'
import cooling1 from '@/public/projects/cooling-1.png'
import cooling3 from '@/public/projects/cooling-3.png'
import covercare1 from '@/public/projects/covercare-1.png'
import debateAgent from '@/public/projects/debate-agent.png'
import debateAgent2 from '@/public/projects/debate-agent-2.png'
import emacs from '@/public/projects/emacs.png'
import emacs2 from '@/public/projects/emacs-2.png'
import qcarOvertake1 from '@/public/projects/qcar-overtake-1.png'
import qcarOvertake2 from '@/public/projects/qcar-overtake-2.png'
import uavMotBenchmark from '@/public/projects/uav-mot-benchmark.png'
import uavSim from '@/public/projects/uav-sim.png'
import workai1 from '@/public/projects/workai-1.png'
import workai2 from '@/public/projects/workai-2.png'
import workai3 from '@/public/projects/workai-3.png'
import workai4 from '@/public/projects/workai-4.png'

export const SHOT_IMAGES: Record<string, StaticImageData | undefined> = {
  '/projects/campus-marketplace.png': campusMarketplace,
  '/projects/campus-marketplace-2.png': campusMarketplace2,
  '/projects/cooling-1.png': cooling1,
  '/projects/cooling-3.png': cooling3,
  '/projects/covercare-1.png': covercare1,
  '/projects/debate-agent.png': debateAgent,
  '/projects/debate-agent-2.png': debateAgent2,
  '/projects/emacs.png': emacs,
  '/projects/emacs-2.png': emacs2,
  '/projects/qcar-overtake-1.png': qcarOvertake1,
  '/projects/qcar-overtake-2.png': qcarOvertake2,
  '/projects/uav-mot-benchmark.png': uavMotBenchmark,
  '/projects/uav-sim.png': uavSim,
  '/projects/workai-1.png': workai1,
  '/projects/workai-2.png': workai2,
  '/projects/workai-3.png': workai3,
  '/projects/workai-4.png': workai4,
}
