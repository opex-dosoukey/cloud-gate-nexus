
import { useState } from 'react';
import { Cloud, BarChart3, Shield, Zap, ArrowRight, Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Stats from '@/components/Stats';

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900">
      <Navigation />
      <Hero />
      <Stats />
      <Features />
    </div>
  );
};

export default Index;
