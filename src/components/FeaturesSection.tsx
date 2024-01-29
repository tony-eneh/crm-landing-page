import { ComponentProps } from 'react';
import { ArrowIcon } from '.';

export interface IFeaturesSectionProps extends ComponentProps<'section'> {}

export function FeaturesSection(props: IFeaturesSectionProps) {
  return (
    <section {...props} className="px-28 pt-20" id="features">
      {/* companies */}
      <div className="">
        <div className="relative grid place-items-center">
          <hr className="absolute left-0 top-1/2 right-0 -z-10 border-gray-300" />
          <div className="rounded-full border border-gray-500 text-gray-500 uppercase px-4 py-1 inline-block bg-white">
            Trusted By
          </div>
        </div>

        <ul className="flex items-center justify-between gap-10">
          <li className="flex-1 max-w-28">
            <img className="w-full" src="logos/shopify.png" alt="" />
          </li>
          <li className="flex-1 max-w-28">
            <img className="w-full" src="logos/zeplin.png" alt="" />
          </li>
          <li className="flex-1 max-w-28">
            <img className="w-full" src="logos/slack.png" alt="" />
          </li>
          <li className="flex-1 max-w-28">
            <img className="w-full" src="logos/feedly.png" alt="" />
          </li>
          <li className="flex-1 max-w-28">
            <img className="w-full" src="logos/flowster.png" alt="" />
          </li>
        </ul>
      </div>

      <div className="grid grid-cols-10 gap-4">
        <h3 className="col-span-6 font-bold text-4xl">
          Enhance efficiency work smarter, not harder
        </h3>
        <p className="col-span-4 font-light text-xs max-w-48 justify-self-end text-gray-500">
          <img src="scribble.svg" alt="" className="block ml-auto mr-8" />
          Embrace efficiency by working smarter, not harder. Prioritize
          impactful tasks, innovate, and leverage technology for optimal
          results.
        </p>

        <div className="relative col-span-6 bg-indigo-950 text-white p-4 rounded-xl">
          <h4 className="font-semibold text-xl mb-4">Advertising Platform</h4>
          <p className="text-xs font-light mb-12">
            Enhance conversion rates utilizing multi-channel campaigns and
            marketing automation strategies, optimizing outreach across various
            channels for a more effective and streamlined approach.
          </p>

          <ul className="text-xs font-light list-disc ml-6">
            <li>Email Marketing</li>
            <li>Marketing Automation</li>
            <li>SMS & WhatsApp Campaigns</li>
          </ul>

          <div className="absolute -bottom-2 -right-2 border-8 border-white rounded-full p-4">
            <ArrowIcon className="-rotate-45" />
          </div>
        </div>

        <div className="col-span-4 relative row-span-2 rounded-xl grid place-items-center p-2 pt-4  bg-[#130E0E]">
          <img src="bulb.png" alt="" />

          <div className="absolute -top-8 right-0 border-8 border-white rounded-full p-4 bg-indigo-700">
            <ArrowIcon className="-rotate-45 text-white" />
          </div>
        </div>

        <img
          src="update-image.png"
          alt=""
          className="rounded-xl overflow-hidden w-full col-span-3"
        />

        <div className="col-span-3 relative bg-[#B2B7FC] p-4 rounded-xl flex flex-col justify-end space-y-3">
          <ArrowIcon className="absolute top-4 right-4 -rotate-45" />

          <h4 className="font-bold text-xl">Sales Solution</h4>
          <p className="font-light text-xs">
            Optimize sales with a comprehensive, multi-channel marketing and
            automation platform.
          </p>
        </div>
      </div>
    </section>
  );
}
