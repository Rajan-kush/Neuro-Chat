import React from "react";
import {
  UserPlusIcon,
  ChatBubbleLeftRightIcon,
  AdjustmentsHorizontalIcon,
} from "@heroicons/react/24/outline";

const HeroSection = () => {
  return (
    <div>
      <div className="flex felx-1 flex-col relative">
        <div className="flex flex-col h-150 gap-40 w-full items-center mt-16">
          <div className="flex flex-col items-center">
            <h1 className="font-[Geist] text-7xl font-medium text-[#F8FAFC]">
              Chat with any <span className="text-[#22D3EE]">Persona.</span>
            </h1>
            <p className="text-[#94A3B8] text-5xl font-thin tracking-tight leading-tight">
              Roleplay, uitility, and exploration with advanced AI.
            </p>
          </div>
          <div className="flex h-50 w-full justify-center z-1">
            <div className="h-50 w-70 bg-[#161B22] rounded-lg flex flex-col border border-[#94A3B8]/30">
              <div className="text-[#22D3EE] h-8 w-8 mt-4 ml-4">
                <UserPlusIcon />
              </div>
              <div>
                <h2 className="text-[#F8FAFC] font-[Geist] text-lg font-semibold mt-4 ml-4">
                  Diverse Personas
                </h2>
                <p className="text-[#94A3B8] tracking-tight ml-4 mt-2">
                  Display personas as archetypes, avatars, simulations, and
                  personas.
                </p>
              </div>
            </div>
            <div className="h-50 w-70 bg-[#161B22] ml-20 rounded-lg border border-[#94A3B8]/30">
              <div className="text-[#22D3EE] h-8 w-8 mt-4 ml-4">
                <ChatBubbleLeftRightIcon />
              </div>
              <div>
                <h2 className="text-[#F8FAFC] font-[Geist] text-lg font-semibold mt-4 ml-4">
                  Context Awareness
                </h2>
                <p className="text-[#94A3B8] tracking-tight ml-4 mt-2">
                  Roleplay, utility, device context, and exploration valor
                  exploration.
                </p>
              </div>
            </div>
            <div className="h-50 w-70 bg-[#161B22] ml-20 rounded-lg border border-[#94A3B8]/30">
              <div className="text-[#22D3EE] h-8 w-8 mt-4 ml-4">
                <AdjustmentsHorizontalIcon />
              </div>
              <div>
                <h2 className="text-[#F8FAFC] font-[Geist] text-lg font-semibold mt-4 ml-4">
                  Fluid Interaction
                </h2>
                <p className="text-[#94A3B8] tracking-tight ml-4 mt-2">
                  Fluid interaction, and experience on web and customization.
                </p>
              </div>
            </div>
          </div>
          <button className="z-1 px-10 py-4 font-[Geist] text-[#94A3B8] rounded-3xl bg-gradient-to-r from-[#161B22] to-[#22D3EE]/40">
            Chat with any <span className="text-[#22D3EE]">Persona</span>
          </button>
        </div>

        <div className="absolute h-50 w-50 bg-[#22D3EE] left-[45%] top-[50%] rounded-full blur-[120px]"></div>
      </div>
    </div>
  );
};

export default HeroSection;
