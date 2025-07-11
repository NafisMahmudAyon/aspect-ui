'use client'

import { Badge, Button, Card, CardContent, Input, Modal, ModalAction, ModalContent } from '@/app/src'
import { cn } from '@/app/src/utils/cn'
import { Portal } from '@/app/src/utils/Portal'
import {
  gettingStartedRoutes,
  layoutRoutes,
  navbarRoutes,
  quickAccessRoute,
  routes,
  templatesRoutes,
  variationsRoutes,
} from '@/routes/routes'
import { AnimatePresence, motion } from 'framer-motion'
import Fuse from 'fuse.js'
import { ArrowUpRight, Search, Slash } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
import ReactFocusLock from 'react-focus-lock'
import { RemoveScroll } from 'react-remove-scroll'

interface routerPath {
  id: string
  name: string
  href: string
  tag?: boolean
  deprecate?: boolean
  redirect?: boolean
}

interface GroupedRoutes {
  label: string
  items: routerPath[]
}

const groupedRoutes: GroupedRoutes[] = [
  { label: 'Components', items: routes },
  { label: 'Variations', items: variationsRoutes },
  { label: 'Templates', items: templatesRoutes },
  { label: 'Getting Started', items: gettingStartedRoutes },
  { label: 'Layout', items: layoutRoutes },
  { label: 'Navbar', items: navbarRoutes },
  { label: 'Quick Access', items: quickAccessRoute },
]

export default function SearchAction() {
  const router = useRouter()
  const [open, setOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [activeIndex, setActiveIndex] = useState<number>(0)
  const [filteredGroups, setFilteredGroups] = useState<{ group: string; items: routerPath[] }[]>([])
  const itemRefs = useRef<(HTMLLIElement | null)[]>([])
  const modalRef = useRef<HTMLDivElement>(null)

  // Handle click outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (open && modalRef.current && !modalRef.current.contains(e.target as Node)) {
        closeModal()
      }
    }

    if (open) {
      document.addEventListener('mousedown', handleClickOutside)
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [open])

  useEffect(() => {
    let orderedGroups = groupedRoutes

    // Prioritize Variations if "variation" is in query
    if (query.toLowerCase().includes('variation')) {
      orderedGroups = [
        groupedRoutes.find((g) => g.label === 'Variations')!,
        ...groupedRoutes.filter((g) => g.label !== 'Variations'),
      ]
    }

    const fuseOptions = {
      keys: ['name', 'href'],
      threshold: 0.4,
    }

    const groupsWithResults: { group: string; items: routerPath[] }[] = []

    orderedGroups.forEach((group) => {
      if (query.trim() === '') {
        // ✅ If query empty, include all items in this group
        if (group.items.length > 0) {
          groupsWithResults.push({ group: group.label, items: group.items })
        }
      } else {
        // Use Fuse search for filtering
        const fuse = new Fuse(group.items, fuseOptions)
        const found = fuse.search(query).map((res) => res.item)
        if (found.length > 0) {
          groupsWithResults.push({ group: group.label, items: found })
        }
      }
    })

    setFilteredGroups(groupsWithResults)
    setActiveIndex(0)
  }, [query])

  useEffect(() => {
    if (itemRefs.current[activeIndex]) {
      itemRefs.current[activeIndex]!.scrollIntoView({
        block: 'nearest',
        behavior: 'smooth',
      })
    }
  }, [activeIndex])

  // Create a flat list for keyboard navigation
  const flatResults = filteredGroups.flatMap((group) =>
    group.items.map((item) => ({ group: group.group, item }))
  )

  const closeModal = () => {
    setOpen(false)
    setQuery('')
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setActiveIndex((prev) => (prev + 1) % flatResults.length)
    }
    if (e.key === 'ArrowUp') {
      e.preventDefault()
      setActiveIndex((prev) => (prev - 1 + flatResults.length) % flatResults.length)
    }
    if (e.key === 'Enter' && flatResults[activeIndex]) {
      e.preventDefault()
      handleSelect(flatResults[activeIndex].item.href)
    }
    if (e.key === 'Escape') {
      e.preventDefault()
      closeModal()
    }
  }

  const handleSelect = (href: string) => {
    closeModal()
    router.push(href)
  }

  const highlightMatch = (text: string, query: string) => {
    if (!query) return text
    const regex = new RegExp(`(${query})`, 'gi')
    return text.split(regex).map((part, i) =>
      part.toLowerCase() === query.toLowerCase() ? (
        <mark key={i} className="bg-primary text-text">
          {part}
        </mark>
      ) : (
        <span key={i}>{part}</span>
      )
    )
  }

  // Global keyboard shortcuts
  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if ((e.key === "k" && (e.metaKey || e.ctrlKey)) || e.key === "/") {
        if (
          (e.target instanceof HTMLElement && e.target.isContentEditable) ||
          e.target instanceof HTMLInputElement ||
          e.target instanceof HTMLTextAreaElement ||
          e.target instanceof HTMLSelectElement
        ) {
          return
        }

        e.preventDefault()
        setOpen(true)
      }
    }
    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  })
  return (
    <div className=''>
      <Modal isOpenExternal={open} onToggle={setOpen}>
        <ModalAction
          className='flex gap-2 md:gap-3 px-2 py-1 rounded-full border border-primary bg-primary text-primary-foreground'
          onClick={() => setOpen(true)}
        >
          <Search />
          <span className='p-1 bg-gray-800/80 dark:bg-gray-600/80 rounded-md text-white'>
            <Slash className='size-4' />
          </span>
        </ModalAction>
        <ModalContent className="p-0 text-sm" overlayClassName="z-[1001]" onKeyDown={handleKeyDown}>
          <Card className="p-0">
            <CardContent className="p-2 min-h-[18rem] min-w-[20rem]">
              <Input
                autoFocus
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                icon={<Search />}
                placeholder="Search components, templates, pages..."
              />
              <div className="mt-4 max-h-80 overflow-y-auto">
                {flatResults.length === 0 && query && (
                  <p className="text-text-muted text-sm">No results found.</p>
                )}
                {filteredGroups.map((group) => (
                  <div key={group.group} className="mb-2">
                    <p className="text-xs uppercase font-semibold text-text-muted mb-1">{group.group}</p>
                    <ul className="space-y-1">
                      {group.items.map((item) => {
                        const globalIndex = flatResults.findIndex(
                          (f) => f.item.id === item.id
                        )

                        return (
                          <li
                            key={item.id}
                            ref={(el) => {
                              if (el) {
                                itemRefs.current[globalIndex] = el;
                              }
                            }}
                            onClick={() => handleSelect(item.href)}
                            className={`relative cursor-pointer p-2 rounded group ${activeIndex === globalIndex
                              ? 'bg-bg-light'
                              : 'hover:bg-bg-light'
                              }`}
                          >
                            <span className={cn('absolute top-1/2 -translate-y-1/2 right-2', activeIndex === globalIndex ? 'opacity-100' : 'opacity-0 group-hover:opacity-100')}><ArrowUpRight /></span>
                            <div className="flex items-center justify-between">
                              <div className="font-medium flex items-center gap-2">
                                <span>{highlightMatch(item.name, query)}</span>
                                {item.tag && (
                                  <Badge variant="outline" className="text-xs">Tag</Badge>
                                )}
                                {item.deprecate && (
                                  <Badge variant="default" className="text-xs bg-red-500 dark:bg-red-600 text-text-muted">Deprecated</Badge>
                                )}
                                {item.redirect && (
                                  <Badge variant="default" className="text-xs">Redirect</Badge>
                                )}
                              </div>
                            </div>
                            <div className="text-xs text-text-muted">{item.href}</div>
                          </li>
                        )
                      })}
                    </ul>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </ModalContent>
      </Modal>
    </div>
  )
}