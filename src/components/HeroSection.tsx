import { ComponentProps, useEffect, useState } from 'react';
import { IData } from '../types';
import { getChartData } from '../api';
import {
  ArrowIcon,
  Avatar,
  AvatarGroup,
  CoronaIcon,
  GlassyCard,
  OutlinedButton,
  PlayIcon,
  Rating,
} from '.';
import { AreaChart } from './AreaChart/AreaChart';

export interface IHeroSectionProps extends ComponentProps<'section'> {}

export function HeroSection(props: IHeroSectionProps) {
  const [chartData, setChartData] = useState<IData[]>();

  useEffect(() => {
    getChartData().then((data) => setChartData(data));
  }, []);

  return (
    <section
      {...props}
      id="product"
      className="bg-indigo-950 text-white px-28 pt-28 h-svh grid grid-cols-1"
      style={{
        backgroundImage:
          'linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(to right, rgba(255, 255, 255, 0.05) 1px, transparent 1px), radial-gradient(rgba(12, 23, 184, .25), 60%, transparent 80%), radial-gradient(rgba(198, 83, 250, 0.25), transparent 60%)',
        backgroundSize: '100px 100px, 100px 100px, 50% 50%, 50vh 50vh',
        backgroundPosition: 'top left, top left, top left, 75vw 50%',
        backgroundRepeat: 'repeat, repeat, no-repeat, no-repeat',
      }}
    >
      <div className="flex justify-between items-center gap-10">
        <h1 className="text-5xl font-bold">
          Increase earnings with CRM Suite
          <div className="inline-block ml-2">
            <AvatarGroup>
              <Avatar
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt="<NAME>"
              />
              <Avatar
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q="
                alt="<NAME>"
              />
              <Avatar
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt="<NAME>"
              />
              <Avatar
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q="
                alt="<NAME>"
              />
              <Avatar
                src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                alt="<NAME>"
              />
              <Avatar
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q="
                alt="<NAME>"
              />
            </AvatarGroup>
          </div>
        </h1>
        <div className="space-y-4">
          <p>
            A user-freiendly CRM fostering enduring customer connections via
            Email, SMS, Chat, and beyond.
          </p>
          <div className="flex">
            <OutlinedButton className="border-white/20">
              Sign Up Free
            </OutlinedButton>
            <button className="bg-indigo-900 text-white rounded-full w-10 h-10 grid place-items-center">
              <ArrowIcon width="16" className="-rotate-45" />
            </button>
          </div>
        </div>
      </div>

      {/* glassy cards grid */}
      <div className="grid grid-cols-4 gap-2 mt-14">
        <GlassyCard className="flex items-center gap-2">
          <Avatar className="h-full aspect-square" style={{ width: 'unset' }}>
            C8
          </Avatar>
          <div className="flex-grow">
            <p>C8 Chat</p>
            <Rating className="origin-left scale-75" />
          </div>
          <ArrowIcon className="w-10" />
        </GlassyCard>

        <GlassyCard className="flex items-center gap-2">
          <Avatar className="h-full aspect-square" style={{ width: 'unset' }}>
            CZ
          </Avatar>
          <div className="flex-grow">
            <p>CZ Analysis</p>
            <Rating className="origin-left scale-75" />
          </div>
          <ArrowIcon className="w-10" />
        </GlassyCard>

        <GlassyCard
          className="grid gap-x-2 gap-y-4 pb-8 row-span-2 items-center"
          style={{
            gridTemplateColumns: '2.5rem 1fr',
          }}
        >
          <div className="grid place-items-center h-[2.5rem] border border-white/25 rounded-md">
            <CoronaIcon />
          </div>
          <div>
            <span className="font-semibold text-xl mr-1">95%</span>
            <small className="text-xs font-thin">Monthly</small>
          </div>
          <p className="col-span-2">Attendance</p>
          <p className="col-span-2 text-xs font-thin">
            Here is your attendance raio in this month.
          </p>
        </GlassyCard>

        <GlassyCard className="grid grid-cols-2 justify-between row-span-2">
          <div className="grid place-items-center rounded-full w-8 h-8 bg-white/10">
            <PlayIcon className="w-3" />
          </div>
          <AvatarGroup className="justify-self-end relative -right-4">
            <Avatar
              src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q="
              alt="<NAME>"
            />
            <Avatar
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
              alt="<NAME>"
            />
          </AvatarGroup>

          <p className="col-span-2 font-thin text-xs self-end relative -bottom-4">
            Satisfied Clients
          </p>
          <p className="col-span-2 font-semibold text-4xl self-end">500%</p>
        </GlassyCard>

        <GlassyCard className="col-span-2 row-span-2 grid items-end justify-center pb-0">
          <img src="app-screenshot.png" alt="app screenshot" className="" />
        </GlassyCard>

        <GlassyCard className="col-span-2 bg-white/5">
          <AreaChart data={chartData} />
        </GlassyCard>
      </div>
    </section>
  );
}
