import React, { useState, useEffect } from 'react';
import { Plus, X, User, Calendar } from 'lucide-react';
import { PlanType } from '../Dashboard';
import { supabase, Feature, OnboardingQuestion } from '../../lib/supabase';

interface PlanPageProps {
  planType: PlanType;
  activeUser: string;
}

const planConfig = {
  'free-normal': {
    title: 'Free/Normal User Plan',
    description: 'Basic plan for individual users looking to discover and book services'
  },
  'personal-small': {
    title: 'Personal/Small Business Plan (No Store)',
    description: 'Perfect for service providers and small businesses without product sales'
  },
  'large-business': {
    title: 'Large Businesses Plan (With Store)',
    description: 'Comprehensive solution for large businesses with e-commerce capabilities'
  }
};

function PlanPage({ planType, activeUser }: PlanPageProps) {
  const [features, setFeatures] = useState<Feature[]>([]);
  const [onboardingQuestions, setOnboardingQuestions] = useState<OnboardingQuestion[]>([]);
  const [newFeatureName, setNewFeatureName] = useState('');
  const [newFeatureDescription, setNewFeatureDescription] = useState('');
  const [newQuestion, setNewQuestion] = useState('');
  const [loading, setLoading] = useState(true);
  
  const config = planConfig[planType];

  useEffect(() => {
    loadData();
  }, [planType]);

  const loadData = async () => {
    setLoading(true);
    try {
      // Load features
      const { data: featuresData, error: featuresError } = await supabase
        .from('features')
        .select('*')
        .eq('plan_type', planType)
        .order('created_at', { ascending: false });

      if (featuresError) throw featuresError;
      setFeatures(featuresData || []);

      // Load onboarding questions
      const { data: questionsData, error: questionsError } = await supabase
        .from('onboarding_questions')
        .select('*')
        .eq('plan_type', planType)
        .order('created_at', { ascending: false });

      if (questionsError) throw questionsError;
      setOnboardingQuestions(questionsData || []);
    } catch (error) {
      console.error('Error loading data:', error);
    } finally {
      setLoading(false);
    }
  };

  const addFeature = async () => {
    if (newFeatureName.trim() && newFeatureDescription.trim()) {
      try {
        const { data, error } = await supabase
          .from('features')
          .insert([{
            plan_type: planType,
            name: newFeatureName.trim(),
            description: newFeatureDescription.trim(),
            added_by: activeUser
          }])
          .select()
          .single();

        if (error) throw error;
        
        setFeatures([data, ...features]);
        setNewFeatureName('');
        setNewFeatureDescription('');
      } catch (error) {
        console.error('Error adding feature:', error);
      }
    }
  };

  const removeFeature = async (featureId: string) => {
    try {
      const { error } = await supabase
        .from('features')
        .delete()
        .eq('id', featureId);

      if (error) throw error;
      
      setFeatures(features.filter(f => f.id !== featureId));
    } catch (error) {
      console.error('Error removing feature:', error);
    }
  };

  const addQuestion = async () => {
    if (newQuestion.trim()) {
      try {
        const { data, error } = await supabase
          .from('onboarding_questions')
          .insert([{
            plan_type: planType,
            question: newQuestion.trim(),
            added_by: activeUser
          }])
          .select()
          .single();

        if (error) throw error;
        
        setOnboardingQuestions([data, ...onboardingQuestions]);
        setNewQuestion('');
      } catch (error) {
        console.error('Error adding question:', error);
      }
    }
  };

  const removeQuestion = async (questionId: string) => {
    try {
      const { error } = await supabase
        .from('onboarding_questions')
        .delete()
        .eq('id', questionId);

      if (error) throw error;
      
      setOnboardingQuestions(onboardingQuestions.filter(q => q.id !== questionId));
    } catch (error) {
      console.error('Error removing question:', error);
    }
  };

  if (loading) {
    return (
      <div className="p-8 max-w-6xl mx-auto">
        <div className="flex items-center justify-center h-64">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-8 max-w-6xl mx-auto">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          {config.title}
        </h1>
        <p className="text-gray-600">
          {config.description}
        </p>
      </div>

      <div className="space-y-8">
        {/* Onboarding Questions Section */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">
            Onboarding Questions
          </h2>
          
          {/* Add Question Form */}
          <div className="mb-6 p-4 bg-gray-50 rounded-lg">
            <div className="flex space-x-2">
              <input
                type="text"
                value={newQuestion}
                onChange={(e) => setNewQuestion(e.target.value)}
                placeholder="Enter a new onboarding question..."
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                onKeyPress={(e) => e.key === 'Enter' && addQuestion()}
              />
              <button
                onClick={addQuestion}
                disabled={!newQuestion.trim()}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200 flex items-center space-x-2"
              >
                <Plus className="w-4 h-4" />
                <span>Add</span>
              </button>
            </div>
          </div>

          {/* Questions List */}
          <div className="space-y-3">
            {onboardingQuestions.length === 0 ? (
              <div className="text-center py-8 text-gray-500">
                <p>No onboarding questions added yet</p>
                <p className="text-sm">Add the first question to get started</p>
              </div>
            ) : (
              onboardingQuestions.map((question, index) => (
                <div
                  key={question.id}
                  className="flex items-start justify-between p-4 bg-gray-50 rounded-lg border border-gray-100 hover:bg-gray-100 transition-colors duration-200"
                >
                  <div className="flex items-start space-x-3 flex-1">
                    <div className="w-6 h-6 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center text-sm font-medium flex-shrink-0 mt-1">
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-800 font-medium mb-2">
                        {question.question}
                      </p>
                      <div className="flex items-center text-xs text-gray-500">
                        <User className="w-3 h-3 mr-1" />
                        <span>Added by {question.added_by}</span>
                        <span className="mx-2">•</span>
                        <Calendar className="w-3 h-3 mr-1" />
                        <span>{new Date(question.created_at).toLocaleDateString()}</span>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => removeQuestion(question.id)}
                    className="ml-4 p-1 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded transition-colors duration-200"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Features Section */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">
            Features
          </h2>
          
          {/* Add Feature Form */}
          <div className="mb-6 p-4 bg-gray-50 rounded-lg">
            <div className="space-y-3">
              <input
                type="text"
                value={newFeatureName}
                onChange={(e) => setNewFeatureName(e.target.value)}
                placeholder="Feature name..."
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <textarea
                value={newFeatureDescription}
                onChange={(e) => setNewFeatureDescription(e.target.value)}
                placeholder="Feature description..."
                rows={3}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none"
              />
              <button
                onClick={addFeature}
                disabled={!newFeatureName.trim() || !newFeatureDescription.trim()}
                className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200 flex items-center justify-center space-x-2"
              >
                <Plus className="w-4 h-4" />
                <span>Add Feature</span>
              </button>
            </div>
          </div>

          {/* Features List */}
          <div className="space-y-4">
            {features.length === 0 ? (
              <div className="text-center py-8 text-gray-500">
                <p>No features added yet</p>
                <p className="text-sm">Add the first feature to get started</p>
              </div>
            ) : (
              features.map((feature) => (
                <div
                  key={feature.id}
                  className="p-4 bg-gray-50 rounded-lg border border-gray-100 hover:bg-gray-100 transition-colors duration-200"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {feature.name}
                      </h3>
                      <p className="text-gray-700 mb-3 leading-relaxed">
                        {feature.description}
                      </p>
                      <div className="flex items-center text-xs text-gray-500">
                        <User className="w-3 h-3 mr-1" />
                        <span>Added by {feature.added_by}</span>
                        <span className="mx-2">•</span>
                        <Calendar className="w-3 h-3 mr-1" />
                        <span>{new Date(feature.created_at).toLocaleDateString()}</span>
                      </div>
                    </div>
                    <button
                      onClick={() => removeFeature(feature.id)}
                      className="ml-4 p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded transition-colors duration-200"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlanPage;